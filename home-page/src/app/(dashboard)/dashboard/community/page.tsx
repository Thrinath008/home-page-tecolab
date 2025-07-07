import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-[30em] h-[30em]">
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="w-20 h-20 rounded-full border-2 border-black bg-[#f27405] -mb-24 z-[-1]">
          <div className="absolute w-[50px] h-14 ml-7 rounded-[45%] rotate-[140deg] border-4 border-transparent shadow-[inset_0_16px_#a85103,inset_0_16px_1px_1px_#a85103]"></div>
          <div className="absolute -mt-[9.4em] ml-2 rotate-[-25deg] w-4 h-2 rounded-full bg-[#f69e50]"></div>
          <div className="absolute mt-1 ml-5 rotate-[-20deg] w-6 h-3 rounded-full bg-[#f69e50]"></div>
          <div className="relative -top-[102%] -left-[130%] w-48 h-22 rounded-[50px] bg-gradient-to-r from-[#171717] via-[#353535] to-[#171717] rotate-[-29deg] clip-path-polygon-[50%_0%,49%_100%,52%_100%]"></div>
          <div className="relative -top-[211%] -left-[35%] rotate-45 w-2 h-2 rounded-full border-2 border-black bg-[#979797] z-[99]"></div>
          <div className="relative -top-[210%] -left-[10%] w-48 h-16 rounded-[50px] bg-gradient-to-r from-[#171717] via-[#353535] to-[#171717] mr-20 clip-path-polygon-[47%_0,47%_0,34%_34%,54%_25%,32%_100%,29%_96%,49%_32%,30%_38%] rotate-[-8deg]"></div>
          <div className="relative -top-[294%] left-[94%] w-2 h-2 rounded-full border-2 border-black bg-[#979797] z-[99]"></div>
        </div>
        <div className="w-68 h-36 mt-12 rounded-[15px] bg-[#d36604] flex justify-center border-2 border-[#1d0e01] shadow-[inset_0.2em_0.2em_#e69635] relative
          before:content-[''] before:absolute before:w-68 before:h-36 before:rounded-[15px] before:bg-[repeating-radial-gradient(#d36604_0_0.0001%,#00000070_0_0.0002%)_50%_0/2500px_2500px,repeating-conic-gradient(#d36604_0_0.0001%,#00000070_0_0.0002%)_60%_60%/2500px_2500px] before:bg-blend-difference before:opacity-10">
          <div className="absolute mt-1 -ml-1 h-3 w-3">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 189.929 189.929" xmlSpace="preserve">
              <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
              C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-[15px] shadow-[3.5px_3.5px_0_#e69635]">
            <div className="rounded-[10px]">
              <div className="w-44 h-[7.75em] flex items-center justify-center rounded-[10px]">
                <div className="w-52 h-[7.85em] font-montserrat border-2 border-[#1d0e01] bg-[repeating-radial-gradient(#000_0_0.0001%,#ffffff_0_0.0002%)_50%_0/2500px_2500px,repeating-conic-gradient(#000_0_0.0001%,#ffffff_0_0.0002%)_60%_60%/2500px_2500px] bg-blend-difference animate-flicker rounded-[10px] z-[99] flex items-center justify-center font-bold text-[#252525] tracking-[0.15em] text-center hidden xl:flex">
                  <span className="bg-black px-1 text-white text-xs rounded-[5px] z-10">NOT FOUND</span>
                </div>
                <div className="w-52 h-[7.85em] font-montserrat bg-gradient-to-r from-[#002fc6] from-[0%] via-[#002bb2] via-[14.2857142857%] via-[#3a3a3a] via-[14.2857142857%] via-[#303030] via-[28.5714285714%] via-[#ff0afe] via-[28.5714285714%] via-[#f500f4] via-[42.8571428571%] via-[#6c6c6c] via-[42.8571428571%] via-[#626262] via-[57.1428571429%] via-[#0affd9] via-[57.1428571429%] via-[#00f5ce] via-[71.4285714286%] via-[#3a3a3a] via-[71.4285714286%] via-[#303030] via-[85.7142857143%] via-[white] via-[85.7142857143%] to-[#fafafa] to-[100%] rounded-[10px] border-2 border-black z-[99] flex items-center justify-center font-bold text-[#252525] tracking-[0.15em] text-center overflow-hidden xl:hidden
                  before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[68.4782608696%] before:bg-gradient-to-r before:from-[white] before:from-[0%] before:via-[#fafafa] before:via-[14.2857142857%] before:via-[#ffe60a] before:via-[14.2857142857%] before:via-[#f5dc00] before:via-[28.5714285714%] before:via-[#0affd9] before:via-[28.5714285714%] before:via-[#00f5ce] before:via-[42.8571428571%] before:via-[#10ea00] before:via-[42.8571428571%] before:via-[#0ed600] before:via-[57.1428571429%] before:via-[#ff0afe] before:via-[57.1428571429%] before:via-[#f500f4] before:via-[71.4285714286%] before:via-[#ed0014] before:via-[71.4285714286%] before:via-[#d90012] before:via-[85.7142857143%] before:via-[#002fc6] before:via-[85.7142857143%] before:to-[#002bb2] before:to-[100%]
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[21.7391304348%] after:bg-gradient-to-r after:from-[#006c6b] after:from-[0%] after:via-[#005857] after:via-[16.6666666667%] after:via-[white] after:via-[16.6666666667%] after:via-[#fafafa] after:via-[33.3333333333%] after:via-[#001b75] after:via-[33.3333333333%] after:via-[#001761] after:via-[50%] after:via-[#6c6c6c] after:via-[50%] after:via-[#626262] after:via-[66.6666666667%] after:via-[#929292] after:via-[66.6666666667%] after:via-[#888888] after:via-[83.3333333333%] after:via-[#3a3a3a] after:via-[83.3333333333%] after:to-[#303030] after:to-[100%]">
                  <span className="bg-black px-1 text-white text-xs rounded-[5px] z-10">NOT FOUND</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[0.1em] self-end">
            <div className="w-[2px] h-2 bg-black rounded-t-[25px]"></div>
            <div className="flex-grow w-[2px] h-4 bg-black rounded-t-[25px]"></div>
            <div className="w-[2px] h-2 bg-black rounded-t-[25px]"></div>
          </div>
          <div className="w-17 self-center h-32 bg-[#e69635] border-2 border-[#1d0e01] p-2.5 rounded-[10px] flex flex-col items-center justify-center gap-3 shadow-[3px_3px_0_#e69635]">
            <div className="w-[1.65em] h-[1.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_2px_2px_1px_#b49577,-2px_0_#513721,-2px_0_0_1px_black] relative
              before:content-[''] before:absolute before:mt-4 before:ml-2 before:rotate-[47deg] before:rounded-[5px] before:w-[0.1em] before:h-4 before:bg-black
              after:content-[''] after:absolute after:mt-[0.9em] after:ml-3 after:rotate-[47deg] after:rounded-[5px] after:w-[0.1em] after:h-[0.55em] after:bg-black">
              <div className="absolute -mt-[0.1em] ml-2.5 rotate-45 w-[0.15em] h-6 bg-black"></div>
            </div>
            <div className="w-[1.65em] h-[1.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_2px_2px_1px_#b49577,-2px_0_#513721,-2px_0_0_1px_black] relative
              before:content-[''] before:absolute before:mt-[1.05em] before:ml-3 before:-rotate-45 before:rounded-[5px] before:w-[0.15em] before:h-4 before:bg-black
              after:content-[''] after:absolute after:-mt-[0.1em] after:ml-2.5 after:-rotate-45 after:w-[0.15em] after:h-6 after:bg-black"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <div className="w-[0.65em] h-[0.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_1.25px_1.25px_1px_#b49577]"></div>
                <div className="w-[0.65em] h-[0.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_1.25px_1.25px_1px_#b49577]"></div>
                <div className="w-[0.65em] h-[0.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_1.25px_1.25px_1px_#b49577]"></div>
              </div>
              <div className="h-[2px] bg-[#171717]"></div>
              <div className="h-[2px] bg-[#171717]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[8.7em]">
          <div className="h-4 w-8 border-2 border-[#171717] bg-[#4d4d4d] -mt-1 z-[-1]"></div>
          <div className="h-4 w-8 border-2 border-[#171717] bg-[#4d4d4d] -mt-1 z-[-1]"></div>
          <div className="absolute h-[0.15em] w-70 mt-3 bg-[#171717]"></div>
        </div>
        <div className="absolute flex flex-row gap-24 -mb-8 items-center justify-center opacity-50 font-montserrat z-[-5]">
          <div className="scale-y-[24.5] scale-x-9">4</div>
          <div className="scale-y-[24.5] scale-x-9">0</div>
          <div className="scale-y-[24.5] scale-x-9">4</div>
        </div>
      </div>
    </div>
  );
};

export default Card;