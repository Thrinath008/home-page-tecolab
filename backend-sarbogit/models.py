from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, JSON
from sqlalchemy.orm import relationship
from database import Base
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text('now()'))
    is_active = Column(Boolean, server_default='FALSE', nullable=False)
    skills = Column(String, nullable=True)
    goal = Column(String, nullable=True)
    experience = Column(String, nullable=True)
    wants_to_learn = Column(String, nullable=True)
    
    
class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String)
    level = Column(String)
    duration = Column(String)
    teamSize = Column(String)
    skills = Column(JSON)  # store as list in JSON
    participants = Column(Integer)
    spots = Column(Integer)
    image = Column(String)
