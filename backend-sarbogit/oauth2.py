from jose import JWTError, jwt
from datetime import datetime, timedelta
import schemas, database, models
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from config import settings

# OAuth2PasswordBearer is a class that provides a way to get the token from the request

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
# This is the URL where the token will be sent to get the access token


SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes
# These are the settings for the JWT token, which include the secret key, algorithm, and expiration time

def create_access_token(data: dict):
    to_encode = data.copy()
    
    expire = datetime.utcnow() + timedelta(minutes = ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
    return encoded_jwt

#Below not required for now as we are just logging in with email and password, will be required once we implement courses and other features which only logged in users can access

def verify_access_token(token: str, credentials_exception):
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        
        id: str = payload.get("user_id")
        email: str = payload.get("user_email")
        
        if id or email is None:
            raise credentials_exception
        
        token_data = schemas.TokenData(id=id, email=email)
    
    except JWTError as e:
        raise credentials_exception
    
    return token_data
    
    
def get_current_user(token: str = Depends(oauth2_scheme), db: Session =  Depends(database.get_db)):
    
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
        
    token = verify_access_token(token, credentials_exception)
    
    user = db.query(models.User).filter(models.User.id == token.id).first()
    
    # return verify_access_token(token, credentials_exception)
    
    return user