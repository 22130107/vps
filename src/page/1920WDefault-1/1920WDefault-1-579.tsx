import { useState } from "react";
import { createPortal } from "react-dom";
import { Link as RouterLink } from "react-router-dom";
import BaoCaoGiaoDich from "../BaoCaoGiaoDich";
import type { GiaoDich } from "../BaoCaoGiaoDich";
import svgPaths from "./svg-512w5t9yk0";
import LiveClock from "../LiveClock";
import imgDataHomeLogo from "../1920WDefault/a6b6551ca9a3ad36a9a7b415ab1195d06424f390.png";
import imgLangBgPng from "../1920WDefault/d92dda6f1d6c2b719487d3a63b63f34fab0b99f9.png";
import imgImage from "../1920WDefault/e7bd66c0037feb3ec6c49079eaeb8462bac628ae.png";
import imgBackground from "../1920WDefault/c98cac6c2da8ce198c535b02f7dcc15dd56bcf7b.png";
import imgLinkServiceTimePng from "../1920WDefault/994cc6385b62912e7c1ede1e2d55c4516f59f529.png";
import imgBackground1 from "../1920WDefault/9944a3ac640bfa6b12bd34a194cc24108c7c211d.png";
import imgDataMarketImgIndex from "../1920WDefault/4518d13d6713557ae18cc8faded29dad03f9b740.png";
import imgGreenBulletPng from "../1920WDefault/eb6612a4447bea64cb0136f4512e00e891699a4d.png";
import imgRedBulletPng from "../1920WDefault/1c213a0db5472f5a6773e5a7883f9f1da015bf8e.png";
import imgYellowBulletPng from "../1920WDefault/1224156319b2da5b28a0c57cc98a9d2dbfe265e7.png";
import imgDataMarketImgIndex1 from "../1920WDefault/e3350fc49a81a7ee42af4bc9b4569580e1426af7.png";
import imgLink from "../1920WDefault/bf19cc4cc52855bd8a47558e5c66ceeab9d1b5f0.png";
import imgLink1 from "../1920WDefault/75af7c6e7f4409cab8691213e7b6748623e86a38.png";
import imgButton from "../1920WDefault/64ee7930a3d7603946020398c23effd6c9591dbe.png";
import imgButton1 from "../1920WDefault/c1252ff7b4d048db2d0c607c4541f5b955cfecdd.png";
import imgLink2 from "../1920WDefault/f3b624e77e219c35ecdeece92759747125c0dad1.png";
import imgInput from "../1920WDefault/1c6c58bb1ccd67528d4128f35590543a007b7cfa.png";
import imgTableHeader from "../1920WDefault/00dd4cfb56f3e5defc98e70a344bb73aff3c5011.png";
import { imgGroup, imgGroup1 } from "./svg-nquf5";

function DataHomeLogo() {
  return (
    <div className="absolute aspect-[160/37.13999938964844] left-[2px] right-[978px] top-[13.42px]" data-name="Data → home_logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[73.09%] left-[3.13%] max-w-none top-[13.46%] w-[93.75%]" src={imgDataHomeLogo} />
      </div>
    </div>
  );
}

function LangBgPng() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+24.14px)] size-[9px] top-[4.64px]" data-name="lang_bg.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLangBgPng} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-white border border-[#b2b2b2] border-solid h-[18px] left-[160.91px] rounded-[10px] top-0 w-[80px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%-4.4px)] not-italic text-[#b2b2b2] text-[11px] text-center top-[8px] w-[48.48px]">
        <p className="leading-[normal]">{`Thay đổi `}</p>
      </div>
      <LangBgPng />
    </div>
  );
}

function TableBodyRowData() {
  return (
    <div className="absolute border border-solid border-white h-[20px] right-[183.84px] top-[5px] w-[242.91px]" data-name="Table → Body → Row → Data">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[5px] not-italic text-[#333] text-[0px] top-[9px] w-[156.11px]">
        <p className="text-[10.8px]">
          <span className="leading-[normal]">{`Tài khoản mặc định: `}</span>
          <span className="leading-[normal] text-[#8229e3]">7423321</span>
          <span className="leading-[normal]">{` `}</span>
        </p>
      </div>
      <Link />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#8229e3] h-[24px] left-[288.86px] right-[644.45px] rounded-bl-[11.25px] rounded-tl-[11.25px] top-[4px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[11.4px] text-center text-white top-[12px] w-[24.89px]">
        <p className="leading-[12px]">New</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[25.75%_32.83%_21.59%_34.34%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.611px_-2.257px] mask-size-[10.833px_10.833px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61111 6.31945">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2edda600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[6.94%_0_2.78%_1.51%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-[193.7px] overflow-clip top-1/2 w-[11px]" data-name="SVG">
      <ClipPathGroup />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#541896] h-[24px] left-[327.55px] right-[432.75px] rounded-br-[11.25px] rounded-tr-[11.25px] top-[4px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[12px] justify-center leading-[0] left-[98.95px] not-italic text-[10px] text-center text-white top-1/2 w-[183.9px]">
        <p className="leading-[10px]">Khám phá SmartOne Web phiên bản mới</p>
      </div>
      <Svg />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[27px] right-[171.84px] top-0 w-[5px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[7407.41%] left-0 max-w-none top-0 w-[600%]" src={imgImage} />
      </div>
    </div>
  );
}

function LinkServiceTimePng() {
  return (
    <div className="absolute left-[5px] size-[15px] top-[5.64px]" data-name="Link → service_time.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkServiceTimePng} />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[24.2px] left-0 top-0 w-[28.08px]" data-name="Item">
      <LinkServiceTimePng />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[25px] not-italic text-[#333] text-[11px] top-[12px] w-[3.28px]">
        <p className="leading-[15.4px]">|</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.875px_-1.875px] mask-size-[15px_15px]" style={{ maskImage: `url('${imgGroup1}')` }} data-name="Group">
      <div className="absolute inset-[-8.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2495 13.25">
          <g id="Group">
            <path d={svgPaths.p38bed300} id="Vector" stroke="var(--stroke-0, #8229E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[5px] overflow-clip size-[15px] top-[calc(50%-0.01px)]" data-name="SVG">
      <ClipPathGroup1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-y-1/2 absolute h-[24.2px] left-0 top-1/2 w-[54.95px]" data-name="Link">
      <Svg1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[20px] not-italic text-[#363636] text-[10.5px] top-[calc(50%-0.1px)] w-[30.15px]">
        <p className="leading-[24.2px]">Thoát</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[24.2px] left-[28.07px] top-0 w-[58.03px]" data-name="Item">
      <Link1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[54.96px] not-italic text-[#333] text-[11px] top-[calc(50%-0.71px)] w-[3.28px]">
        <p className="leading-[15.4px]">|</p>
      </div>
    </div>
  );
}

function LangBgPng1() {
  return (
    <div className="absolute left-[66.73px] size-[9px] top-[8.64px]" data-name="lang_bg.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLangBgPng} />
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[24.2px] left-[86.11px] top-0 w-[80.73px]" data-name="Item → Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[5px] not-italic text-[#363636] text-[11px] top-[12px] w-[61.93px]">
        <p className="leading-[24.2px] whitespace-pre-wrap">{"Ngôn ngữ   "}</p>
      </div>
      <LangBgPng1 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[0.01px] left-0 top-0 w-[166.84px]" data-name="List">
      <Item />
      <Item1 />
      <ItemLink />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute h-[27px] right-[5px] top-0 w-[166.84px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[92.59%] left-0 max-w-none top-0 w-[1.2%]" src={imgBackground} />
      </div>
      <List />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[27px] right-0 top-0 w-[5px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[7407.41%] left-0 max-w-none top-[-259.26%] w-[600%]" src={imgImage} />
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="absolute h-[27px] left-[166px] right-[2px] top-[2px]" data-name="Data">
      <TableBodyRowData />
      <Background />
      <Background1 />
      <Image />
      <Background2 />
      <Image1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[201.13px] text-[#353535] text-[11px] text-right top-[52px] w-[161.04px]">
        <p className="leading-[15.4px]"><LiveClock /></p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[191.33px] text-[#353535] text-[0px] top-[52px] translate-x-full w-[191.53px]">
        <p className="text-[10.5px]">
          <span className="leading-[15.4px]">{"Xin Chào, "}</span>
          <span className="capitalize leading-[15.4px]">CAO TRÍ THÀNH (742332)</span>
        </p>
      </div>
    </div>
  );
}

function TableBodyRow() {
  return (
    <div className="absolute h-[64px] left-[390px] right-[390px] top-0" data-name="Table → Body → Row">
      <DataHomeLogo />
      <Data />
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute bg-[#8229e3] h-[34px] left-[88.69px] rounded-tl-[5px] rounded-tr-[5px] top-0 w-[119.36px]" data-name="Item">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[17px] not-italic text-[11.8px] text-white top-[17px] w-[85.56px]">
        <p className="leading-[10px]">Quản lý tài sản</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-[912.41px]" data-name="List">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[17px] not-italic text-[#545454] text-[11.8px] top-[17px] w-[54.89px]">
        <p className="leading-[10px]">Giao dịch</p>
      </div>
      <Item2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[225.05px] not-italic text-[#545454] text-[11.6px] top-[17px] w-[45.33px]">
        <p className="leading-[10px]">Tiện ích</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[304.17px] not-italic text-[#545454] text-[11.8px] top-[17px] w-[100.23px]">
        <p className="leading-[10px]">Quản lý tài khoản</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[438.2px] not-italic text-[#545454] text-[11.8px] top-[17px] w-[96.23px]">
        <p className="leading-[10px]">Đầu tư trái phiếu</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[568.23px] not-italic text-[#545454] text-[11.8px] top-[17px] w-[27.54px]">
        <p className="leading-[10px]">INFY</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[629.58px] not-italic text-[#545454] text-[11.8px] top-[17px] w-[88.7px]">
        <p className="leading-[10px]">Tiền gửi kỳ hạn</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[752.08px] not-italic text-[#545454] text-[11.8px] top-[17px] w-[143.53px]">
        <p className="leading-[10px]">Công cụ khuyến nghị FIT</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[#e2e2e2] border border-[#e7e7e7] border-solid drop-shadow-[0px_1px_0px_rgba(255,255,255,0.25)] h-[36px] left-[390px] right-[390px] top-[64px]" data-name="Navigation">
      <List1 />
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute bg-[#8229e3] h-[30px] left-[666.19px] top-[2px] w-[136.7px]" data-name="Item → Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[15px] not-italic text-[12px] text-white top-[15px] w-[106.9px]">
        <p className="leading-[10px]">Lãi lỗ đã thực hiện</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-[804.89px]" data-name="List">
      <RouterLink to="/" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[17px] not-italic text-[11.8px] text-white top-[17px] w-[145.58px] hover:opacity-80 transition-opacity cursor-pointer">
        <p className="leading-[10px]">Quản lý danh mục tài sản</p>
      </RouterLink>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[196.38px] not-italic text-[11.8px] text-white top-[17px] w-[96.22px]">
        <p className="leading-[10px]">Dịch vụ tài chính</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[326.39px] not-italic text-[12px] text-white top-[17px] w-[71.58px]">
        <p className="leading-[10px]">Lịch sử lệnh</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[431.77px] not-italic text-[11.8px] text-white top-[17px] w-[63.56px]">
        <p className="leading-[10px]">Sao kê tiền</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[529.13px] not-italic text-[11.8px] text-white top-[17px] w-[118.26px]">
        <p className="leading-[10px]">Sao kê chứng khoán</p>
      </div>
      <ItemLink1 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute bg-[#808080] border border-[rgba(0,0,0,0)] border-solid drop-shadow-[0px_1px_0px_rgba(255,255,255,0.25)] h-[36px] left-[390px] right-[390px] top-[99px]" data-name="Navigation">
      <List2 />
    </div>
  );
}

function DataMarketImgIndex() {
  return (
    <div className="absolute aspect-[12.979999542236328/13.779999732971191] left-[2px] right-[341.02px] top-[18.61px]" data-name="Data → market-img-index">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-[-0.08%] max-w-none top-[-0.03%] w-[100.15%]" src={imgDataMarketImgIndex} />
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[15px] leading-[0] left-[17px] not-italic right-0 top-0" data-name="Data">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[2px] text-[#337ab7] text-[0px] top-[7px] w-auto">
        <p className="text-[11px]">
          <span className="leading-[11px]">HNX</span>
          <span className="leading-[11px] text-[#6d6d6a]">: </span>
          <span className="leading-[11px] text-[#00AA00FF]">Đóng cửa</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[145.55px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[32px]">
        <p className="leading-[11px]">{`Index `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[109.75px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[36.92px]">
        <p className="leading-[11px]">{`264.37 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[69.03px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[28.36px]">
        <p className="leading-[11px]">3.04 (</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[36.87px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[35.07px]">
        <p className="leading-[11px]">1.16%)</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute h-[15px] left-0 right-0 top-0" data-name="Row">
      <DataMarketImgIndex />
      <Data1 />
    </div>
  );
}

function RowData() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[18px] leading-[0] left-[17px] not-italic right-0 text-[#333] top-[15px]" data-name="Row → Data">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[2px] text-[11px] top-[9px] w-[38.09px]">
        <p className="leading-[14px]">{`KLGD: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[46.02px] text-[11px] top-[9px] w-[100px]">
        <p className="leading-[11px]">53,741,749</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[119.98px] text-[11px] top-[9px] translate-x-full w-[38.7px]">
        <p className="leading-[14px]">{`GTGD: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[75.36px] text-[11px] top-[9px] translate-x-full w-[73.56px]">
        <p className="leading-[11px]">914.65 tỉ đồng</p>
      </div>
    </div>
  );
}

function GreenBulletPng() {
  return (
    <div className="absolute h-[9px] right-[78.87px] top-[3.64px] w-[10px]" data-name="green_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGreenBulletPng} />
      </div>
    </div>
  );
}

function RedBulletPng() {
  return (
    <div className="absolute h-[9px] right-[47.56px] top-[3.64px] w-[10px]" data-name="red_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRedBulletPng} />
      </div>
    </div>
  );
}

function YellowBulletPng() {
  return (
    <div className="absolute h-[10px] right-[14.25px] top-[3.14px] w-[12px]" data-name="yellow_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYellowBulletPng} />
      </div>
    </div>
  );
}

function RowData1() {
  return (
    <div className="absolute h-[18px] left-[17px] right-0 top-[33px]" data-name="Row → Data">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[2px] not-italic text-[#333] text-[11px] top-[9px] w-[40.54px]">
        <p className="leading-[14px]">{`Số GD: `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[48.47px] not-italic text-[#333] text-[11px] top-[9px] w-[58.33px]">
        <p className="leading-[11px]">914648.132</p>
      </div>
      <GreenBulletPng />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[78.87px] text-[#333] text-[11px] top-[7px] translate-x-full w-[15.51px]">
        <p className="leading-[11px]">{`66 `}</p>
      </div>
      <RedBulletPng />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[47.56px] text-[#333] text-[11px] top-[7px] translate-x-full w-[15.51px]">
        <p className="leading-[11px]">{`62 `}</p>
      </div>
      <YellowBulletPng />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[14.25px] text-[#333] text-[9.3px] top-[7px] translate-x-full w-[12.45px]">
        <p className="leading-[11px]">64</p>
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[51px] left-[3px] right-[3px] top-[2px]" data-name="Table → Body">
      <Row />
      <RowData />
      <RowData1 />
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute border-[#cdcbcb] border-dashed border-r h-[53px] left-0 top-[2px] w-[363px]" data-name="Item">
      <TableBody />
    </div>
  );
}

function DataMarketImgIndex1() {
  return (
    <div className="absolute aspect-[12.979999542236328/12.199999809265137] left-[2px] right-[344.02px] top-[19.41px]" data-name="Data → market-img-index">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.1%] left-[-0.08%] max-w-none top-[-0.05%] w-[100.15%]" src={imgDataMarketImgIndex1} />
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[15px] leading-[0] left-[17px] not-italic right-0 top-0" data-name="Data">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[2px] text-[#337ab7] text-[0px] top-[7px] w-auto">
        <p className="text-[11px]">
          <span className="leading-[11px]">VN30</span>
          <span className="leading-[11px] text-[#6d6d6a]">: </span>
          <span className="leading-[11px] text-[#00AA00FF]">Đóng cửa</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[151.66px] text-[#4a4a4a] text-[11px] top-[7px] translate-x-full w-[32px]">
        <p className="leading-[11px]">{`Index `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[115.86px] text-[#DE0000FF] text-[11px] top-[7px] translate-x-full w-[43.03px]">
        <p className="leading-[11px]">{`2027.51 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[69.03px] text-[#DE0000FF] text-[11px] top-[7px] translate-x-full w-[28.36px]">
        <p className="leading-[11px]">1.43 (</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[36.87px] text-[#DE0000FF] text-[11px] top-[7px] translate-x-full w-[35.07px]">
        <p className="leading-[11px]">0.07%)</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute h-[15px] left-0 right-0 top-0" data-name="Row">
      <DataMarketImgIndex1 />
      <Data2 />
    </div>
  );
}

function RowData2() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[18px] leading-[0] left-[17px] not-italic right-0 text-[#333] top-[15px]" data-name="Row → Data">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[2px] text-[11px] top-[9px] w-[38.09px]">
        <p className="leading-[14px]">{`KLGD: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[46.02px] text-[11px] top-[9px] w-[100px]">
        <p className="leading-[11px]">334,087,255</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[135.28px] text-[11px] top-[9px] translate-x-full w-[38.7px]">
        <p className="leading-[14px]">{`GTGD: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[90.66px] text-[11px] top-[9px] translate-x-full w-[88.86px]">
        <p className="leading-[11px]">14,283.38 tỉ đồng</p>
      </div>
    </div>
  );
}

function GreenBulletPng1() {
  return (
    <div className="absolute h-[9px] right-[72.75px] top-[3.64px] w-[10px]" data-name="green_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGreenBulletPng} />
      </div>
    </div>
  );
}

function RedBulletPng1() {
  return (
    <div className="absolute h-[9px] right-[41.44px] top-[3.64px] w-[10px]" data-name="red_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRedBulletPng} />
      </div>
    </div>
  );
}

function YellowBulletPng1() {
  return (
    <div className="absolute h-[10px] right-[8.12px] top-[3.14px] w-[12px]" data-name="yellow_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYellowBulletPng} />
      </div>
    </div>
  );
}

function RowData3() {
  return (
    <div className="absolute h-[18px] left-[17px] right-0 top-[33px]" data-name="Row → Data">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[2px] not-italic text-[#333] text-[11px] top-[9px] w-[40.54px]">
        <p className="leading-[14px]">{`Số GD: `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[48.47px] not-italic text-[#333] text-[11px] top-[9px] w-[70.56px]">
        <p className="leading-[11px]">14283375.171</p>
      </div>
      <GreenBulletPng1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[72.75px] text-[#333] text-[11px] top-[7px] translate-x-full w-[15.51px]">
        <p className="leading-[11px]">{`16 `}</p>
      </div>
      <RedBulletPng1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[41.44px] text-[#333] text-[11px] top-[7px] translate-x-full w-[15.52px]">
        <p className="leading-[11px]">{`14 `}</p>
      </div>
      <YellowBulletPng1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[8.12px] text-[#333] text-[11px] top-[7px] translate-x-full w-[6.33px]">
        <p className="leading-[11px]">0</p>
      </div>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[51px] left-0 right-[3px] top-[2px]" data-name="Table → Body">
      <Row1 />
      <RowData2 />
      <RowData3 />
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute border-[#cdcbcb] border-dashed border-r h-[53px] left-[363px] top-[2px] w-[363px]" data-name="Item">
      <TableBody1 />
    </div>
  );
}

function DataMarketImgIndex2() {
  return (
    <div className="absolute aspect-[12.979999542236328/13.779999732971191] left-[2px] right-[344.02px] top-[18.61px]" data-name="Data → market-img-index">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-[-0.08%] max-w-none top-[-0.03%] w-[100.15%]" src={imgDataMarketImgIndex} />
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[15px] leading-[0] left-[17px] not-italic right-0 top-0" data-name="Data">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[2px] text-[#337ab7] text-[0px] top-[7px] w-auto">
        <p className="text-[11px]">
          <span className="leading-[11px]">UPCOM</span>
          <span className="leading-[11px] text-[#6d6d6a]">: </span>
          <span className="leading-[11px] text-[#00AA00FF]">Đóng cửa</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[145.55px] text-[#4a4a4a] text-[11px] top-[7px] translate-x-full w-[32px]">
        <p className="leading-[11px]">{`Index `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[109.75px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[36.92px]">
        <p className="leading-[11px]">{`126.02 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[69.03px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[28.36px]">
        <p className="leading-[11px]">0.82 (</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[36.87px] text-[#00AA00FF] text-[11px] top-[7px] translate-x-full w-[35.07px]">
        <p className="leading-[11px]">0.65%)</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute h-[15px] left-0 right-0 top-0" data-name="Row">
      <DataMarketImgIndex2 />
      <Data3 />
    </div>
  );
}

function RowData4() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[18px] leading-[0] left-[17px] not-italic right-0 text-[#333] top-[15px]" data-name="Row → Data">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[2px] text-[11px] top-[9px] w-[38.09px]">
        <p className="leading-[14px]">{`KLGD: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[46.02px] text-[11px] top-[9px] w-[100px]">
        <p className="leading-[11px]">20,388,621</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[119.98px] text-[11px] top-[9px] translate-x-full w-[38.7px]">
        <p className="leading-[14px]">{`GTGD: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center right-[75.36px] text-[11px] top-[9px] translate-x-full w-[73.56px]">
        <p className="leading-[11px]">299.66 tỉ đồng</p>
      </div>
    </div>
  );
}

function GreenBulletPng2() {
  return (
    <div className="absolute h-[9px] right-[84.98px] top-[3.64px] w-[10px]" data-name="green_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGreenBulletPng} />
      </div>
    </div>
  );
}

function RedBulletPng2() {
  return (
    <div className="absolute h-[9px] right-[47.56px] top-[3.64px] w-[10px]" data-name="red_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRedBulletPng} />
      </div>
    </div>
  );
}

function YellowBulletPng2() {
  return (
    <div className="absolute h-[10px] right-[14.25px] top-[3.14px] w-[12px]" data-name="yellow_bullet.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYellowBulletPng} />
      </div>
    </div>
  );
}

function RowData5() {
  return (
    <div className="absolute h-[18px] left-[17px] right-0 top-[33px]" data-name="Row → Data">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[2px] not-italic text-[#333] text-[11px] top-[9px] w-[40.54px]">
        <p className="leading-[14px]">{`Số GD: `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[48.47px] not-italic text-[#333] text-[11px] top-[9px] w-[57.72px]">
        <p className="leading-[11px]">299655.110</p>
      </div>
      <GreenBulletPng2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[84.98px] text-[#333] text-[11px] top-[7px] translate-x-full w-[21.62px]">
        <p className="leading-[11px]">{`121 `}</p>
      </div>
      <RedBulletPng2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[47.56px] text-[#333] text-[11px] top-[7px] translate-x-full w-[15.51px]">
        <p className="leading-[11px]">{`79 `}</p>
      </div>
      <YellowBulletPng2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic right-[14.25px] text-[#333] text-[10px] top-[7px] translate-x-full w-[12.45px]">
        <p className="leading-[11px]">76</p>
      </div>
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute h-[51px] left-0 right-[3px] top-[2px]" data-name="Table → Body">
      <Row2 />
      <RowData4 />
      <RowData5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute border-[#cdcbcb] border-dashed border-r h-[53px] left-[726px] top-[2px] w-[363px]" data-name="Item">
      <TableBody2 />
    </div>
  );
}

function List3() {
  return (
    <div className="absolute h-[55px] left-0 top-0 w-[3993px]" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[55px] left-[10px] overflow-clip top-0 w-[1089px]" data-name="Container">
      <List3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[55px] left-[10px] overflow-clip top-0 w-[1150px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[14px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[36.36%] left-[-21.43%] max-w-none top-[31.82%] w-[142.86%]" src={imgLink} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[14px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[36.36%] left-[-21.43%] max-w-none top-[31.82%] w-[142.86%]" src={imgLink1} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute h-[55px] left-[400px] right-[400px] top-[139px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.64%] left-0 max-w-none top-0 w-[100.18%]" src={imgBackground1} />
      </div>
      <Container />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[22px] left-[1345.22px] right-[493.78px] top-[220px]" data-name="Button">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[409.09%] left-[-13.58%] max-w-none top-0 w-[127.16%]" src={imgButton} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[10.5px] text-center text-white top-[calc(50%-0.7px)] uppercase w-[25.26px]">
        <p className="leading-[15.4px]">MUA</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[22px] left-[1429px] right-[410px] top-[220px]" data-name="Button">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[409.09%] left-[-13.58%] max-w-none top-0 w-[127.16%]" src={imgButton1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[11px] text-center text-white top-[calc(50%-0.7px)] uppercase w-[24.04px]">
        <p className="leading-[15.4px]">BÁN</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-white h-[15px] left-[531.11px] overflow-clip right-[938.89px] top-[226px]" data-name="Background">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[11px] justify-center leading-[0] left-0 not-italic text-[#1e1eff] text-[9.8px] top-[7.5px] w-[143.56px]">
        <p className="leading-[normal]">Sản phẩm: Giao dịch tài chính</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return <div className="absolute bg-[#f2f2f3] border border-[#e7e8e9] border-solid h-[37px] left-[385px] right-[385px] rounded-[4px] top-[247px]" data-name="Background+Border" />;
}

function Item6() {
  return (
    <div className="absolute h-[14px] left-[126.36px] top-0 w-[66.48px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 text-[#008346] text-[11px] top-[6px] w-[3.28px]">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[13.08px] text-[#808080] text-[10.8px] top-[6px] w-[43.61px]">
        <p className="leading-[normal]">Bảo mật</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[14px] left-[192.84px] text-[11px] top-0 w-[98.84px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 text-[#008346] top-[6px] w-[3.28px]">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[13.08px] text-[#808080] top-[6px] w-[75.97px]">
        <p className="leading-[normal]">Công bố rủi ro</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute h-[14px] left-[291.69px] text-[11px] top-0 w-[61.59px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 text-[#008346] top-[6px] w-[3.28px]">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[13.08px] text-[#808080] top-[6px] w-[38.72px]">
        <p className="leading-[normal]">Liên hệ</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="absolute h-[14px] left-[353.28px] top-0 w-[177.63px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 text-[#008346] text-[11px] top-[6px] w-[3.28px]">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[13.08px] text-[#808080] text-[10.8px] top-[6px] w-[154.75px]">
        <p className="leading-[normal]">Hướng dẫn sử dụng niêm yết</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="absolute h-[14px] left-[530.91px] text-[11px] top-0 w-[181.28px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 text-[#008346] top-[6px] w-[3.28px]">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[13.07px] text-[#808080] top-[6px] w-[158.4px]">
        <p className="leading-[normal]">Hướng dẫn sử dụng phái sinh</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="absolute h-[14px] left-[712.19px] top-0 w-[156.81px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 text-[#008346] text-[11px] top-[6px] w-[3.28px]">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[13.08px] text-[#808080] text-[10.8px] top-[6px] w-[133.93px]">
        <p className="leading-[normal]">Hướng dẫn giao dịch tiền</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="absolute h-[14px] left-[2px] overflow-clip top-[10px] w-[900px]" data-name="List">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[10px] text-[#808080] text-[10.8px] top-[6px] w-[106.56px]">
        <p className="leading-[normal]">Điều khoản sử dụng</p>
      </div>
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Data4() {
  return (
    <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[56.5px] leading-[0] left-[-10px] not-italic right-[248.06px] top-0" data-name="Data">
      <List4 />
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[10px] right-[251.66px] text-[#8229e3] text-[0px] top-[31px]">
        <p className="text-[11px]">
          <span className="leading-[14px]">{`Điện thoại hỗ trợ : `}</span>
          <span className="leading-[14px] text-[#171717]">Hotline: 1900 6457; Hà Nội:+84 24 7308 0188; Hồ Chí Minh: +84 28 7308 0188; Đà Nẵng: +84 236 356 5419</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[11px] right-[616.36px] text-[#333] text-[10.5px] top-[46px]">
        <p className="leading-[16.5px]">Copyright ©2020 Công ty Cổ phần chứng khoán VPS</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#8229e3] h-[22px] right-[25px] top-[2px] w-[93px]" data-name="Background">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[20.83px] not-italic right-[20.63px] text-[10.7px] text-center text-white top-[7px]">
        <p className="leading-[15.4px]">Đầu trang</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="absolute h-[64.5px] left-[894px] right-0 top-0" data-name="Data">
      <Background5 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[2px] not-italic right-[24.8px] text-[#171717] text-[10.5px] text-right top-[44px]">
        <p className="leading-[16.5px]">Copyright © 2017 VPS, All rights reserved.</p>
      </div>
    </div>
  );
}

function TableBodyRow1() {
  return (
    <div className="absolute h-[64.5px] left-0 right-[-2.06px] top-[-2px]" data-name="Table → Body → Row">
      <Data4 />
      <Data5 />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BackgroundHorizontalBorder() {
  return (
    <div className="relative bg-white border-[#8229e3] border-solid border-t-4 h-[66.5px] w-[calc(100%-10px)] mx-[5px]" data-name="Background+HorizontalBorder">
      <TableBodyRow1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[15px] left-px overflow-auto right-px top-px" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-0 not-italic text-[#8229e3] text-[11.9px] top-[7.5px] w-[52.83px]">
        <p className="leading-[normal]">7423321</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute border border-[#767676] border-solid h-[19px] left-[69.34px] overflow-clip rounded-[2.5px] top-[40px] w-[80px]" data-name="Input">
      <Container2 />
    </div>
  );
}

function Input1() {
  return <div className="absolute border border-[#767676] border-solid h-[19px] left-[113.44px] rounded-[2.5px] top-0 w-[80px]" data-name="Input" />;
}

function DivClassBlockSpanLeftBold() {
  return (
    <div className="absolute h-[19px] left-[75px] top-0 w-[179.11px]" data-name="div class='blockSpan left bold">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-0 not-italic text-[#545454] text-[12px] top-[10px] w-[110.65px]">
        <p className="leading-[18px]">Mã chứng khoán</p>
      </div>
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute h-[17px] left-[378.22px] pointer-events-none top-0 w-[100px]" data-name="Input">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[88.24%] left-[84%] max-w-none top-[5.88%] w-[16%]" src={imgInput} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute h-[17px] left-[587.33px] pointer-events-none top-0 w-[100px]" data-name="Input">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[88.24%] left-[84%] max-w-none top-[5.88%] w-[16%]" src={imgInput} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-[#8229e3] h-[20px] left-[752.33px] overflow-clip rounded-[10px] top-0 w-[80px]" data-name="Input">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[12px] text-center text-white top-[10px] w-[30.04px]">
        <p className="leading-[normal]">Xem</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-[#7f7f7f] h-[20px] left-[836.44px] overflow-clip rounded-[10px] top-0 w-[120px]" data-name="Input">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[12px] text-center text-white top-[10px] w-[89.54px]">
        <p className="leading-[normal]">Ngày hiện tại</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[12px] left-[966.44px] top-0 w-[94.59px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[16666.67%] left-0 max-w-none top-[-12166.67%] w-[31.72%]" src={imgImage} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[20px] not-italic text-[#8a8787] text-[10.8px] top-[6px] w-[74.79px]">
        <p className="leading-[normal]">Xuất file Excel</p>
      </div>
    </div>
  );
}

export function Container3() {
  return (
    <div className="absolute h-[29px] left-[5px] overflow-clip right-[5px] top-[20px]" data-name="Container">
      <DivClassBlockSpanLeftBold />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[279.11px] not-italic text-[#545454] text-[12px] top-[9px] w-[54.15px]">
        <p className="leading-[18px]">Từ ngày</p>
      </div>
      <Input2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[488.22px] not-italic text-[#545454] text-[12px] top-[9px] w-[63.56px]">
        <p className="leading-[18px]">Đến ngày</p>
      </div>
      <Input3 />
      <Input4 />
      <Input5 />
      <Link4 />
    </div>
  );
}

function Cell() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-0 right-[1053.67px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[27.31px] whitespace-nowrap">
        <p className="leading-[normal]">Ngày</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[61.55px] right-[932.25px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[91.79px] whitespace-nowrap">
        <p className="leading-[normal]">Mã chứng khoán</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[171.97px] right-[821.83px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[84.06px] whitespace-nowrap">
        <p className="leading-[normal]">Khối lượng bán</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[282.39px] right-[735.2px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[42.11px] whitespace-nowrap">
        <p className="leading-[normal]">Giá bán</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[369.02px] right-[570.48px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[84.39px] whitespace-nowrap">
        <p className="leading-[normal]">Phí + Thuế bán</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[13px] relative w-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Icon">
          <path d={svgPaths.p1e5d0600} fill="var(--fill-0, #B7BABC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Cell5() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[533.74px] right-[428.25px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%-5.4px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[61.22px] whitespace-nowrap">
        <p className="leading-[normal]">{`Giá trị bán `}</p>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[13px] items-center justify-center left-[calc(50%+30.51px)] top-[2.5px] w-[11px]">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[13px] relative w-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Icon">
          <path d={svgPaths.p1e5d0600} fill="var(--fill-0, #B7BABC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Cell6() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[675.97px] right-[316.05px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%-5.4px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[44.95px] whitespace-nowrap">
        <p className="leading-[normal]">{`Giá vốn `}</p>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[13px] items-center justify-center left-[calc(50%+22.37px)] top-[2.5px] w-[11px]">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[13px] relative w-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Icon">
          <path d={svgPaths.p1e5d0600} fill="var(--fill-0, #B7BABC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Cell7() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[788.17px] right-[174.53px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%-5.41px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[60.83px] whitespace-nowrap">
        <p className="leading-[normal]">{`Giá trị vốn `}</p>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[13px] items-center justify-center left-[calc(50%+30.31px)] top-[2.5px] w-[11px]">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[929.69px] right-[99.48px] top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[35.84px] whitespace-nowrap">
        <p className="leading-[normal]">Lãi/Lỗ</p>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="absolute border border-[#b7babc] border-solid h-[20px] left-[1004.74px] right-0 top-0" data-name="Cell">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#333] text-[11px] text-center top-[9px] w-[49.03px] whitespace-nowrap">
        <p className="leading-[normal]">%Lãi/Lỗ</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-0" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
    </div>
  );
}

export function TableHeader() {
  return (
    <div className="absolute h-[20px] left-[5.5px] right-[5.5px] top-[69.5px]" data-name="Table → Header">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#dee7e7] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[145%] left-0 max-w-none top-0 w-[0.27%]" src={imgTableHeader} />
        </div>
      </div>
      <Row3 />
    </div>
  );
}

const initialGiaoDichData: GiaoDich[] = [
  {
    ngay: "21/05/2026 13:59:23",
    maCK: "VPS",
    laiLo: "lai",
    khoiLuongBan: 5000,
    giaBan: 45000,
    phiThueBan: 337500,
    giaTriBan: 224662500,
    giaVon: 40000,
    giaTriVon: 200000000,
    laiLoCT: 24662500,
    phanTramLaiLo: 12.33,
  },
  {
    ngay: "20/05/2026 09:30:12",
    maCK: "FPT",
    laiLo: "lai",
    khoiLuongBan: 2000,
    giaBan: 135000,
    phiThueBan: 405000,
    giaTriBan: 269595000,
    giaVon: 125000,
    giaTriVon: 250000000,
    laiLoCT: 19595000,
    phanTramLaiLo: 7.84,
  },
  {
    ngay: "19/05/2026 13:13:03",
    maCK: "VNM",
    laiLo: "lo",
    khoiLuongBan: 3000,
    giaBan: 68000,
    phiThueBan: 306000,
    giaTriBan: 203694000,
    giaVon: 72000,
    giaTriVon: 216000000,
    laiLoCT: -12306000,
    phanTramLaiLo: -5.7,
  },
  {
    ngay: "19/05/2026 13:00:43",
    maCK: "VNM",
    laiLo: "lai",
    khoiLuongBan: 0,
    giaBan: 0,
    phiThueBan: 0,
    giaTriBan: 0,
    giaVon: 0,
    giaTriVon: 0,
    laiLoCT: 0,
    phanTramLaiLo: 0,
  },
];



function BackgroundBorder1({ isEditingMode }: { isEditingMode?: boolean }) {
  const [allData, setAllData] = useState<GiaoDich[]>(() => {
    const localData = localStorage.getItem("giaoDichData");
    if (localData) {
      const parsed = JSON.parse(localData);
      if (parsed.length > 0 && parsed[0].ngay.length <= 10) {
        // Upgrade format
        const dataWithId = initialGiaoDichData.map(d => ({ ...d, id: Math.random().toString(36).substr(2, 9) }));
        localStorage.setItem("giaoDichData", JSON.stringify(dataWithId));
        return dataWithId;
      }
      return parsed;
    }
    const dataWithId = initialGiaoDichData.map(d => ({ ...d, id: Math.random().toString(36).substr(2, 9) }));
    localStorage.setItem("giaoDichData", JSON.stringify(dataWithId));
    return dataWithId;
  });
  const sortByNgay = (list: GiaoDich[]) =>
    list.slice().sort((a, b) => {
      const toNum = (s: string) => {
        const parts = s.split(' ')[0].split('/');
        return Number(parts[2]) * 1000000 + Number(parts[1]) * 10000 + Number(parts[0]) * 100;
      };
      return toNum(a.ngay) - toNum(b.ngay);
    });

  const [filteredData, setFilteredData] = useState<GiaoDich[]>(() => sortByNgay(allData));

  const handleXem = (maCK: string, tuNgay: string, denNgay: string) => {
    let result = allData;
    
    if (maCK) {
      result = result.filter((row) => row.maCK.includes(maCK.toUpperCase()));
    }

    const parseDate = (dateStr: string) => {
      if (!dateStr) return null;
      const [dmy] = dateStr.split(' ');
      const parts = dmy.split('/');
      if (parts.length === 3) {
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
      }
      return null;
    };

    const fromDate = parseDate(tuNgay);
    const toDate = parseDate(denNgay);

    if (fromDate || toDate) {
      result = result.filter((row) => {
        const rowDate = parseDate(row.ngay);
        if (!rowDate) return true;
        
        if (fromDate && rowDate < fromDate) return false;
        if (toDate && rowDate > toDate) return false;
        return true;
      });
    }

    setFilteredData(sortByNgay(result));
  };

  const handleNgayHienTai = () => {
    const result = allData.filter((row) => row.ngay.startsWith("21/05/2026"));
    setFilteredData(result);
  };

  const handleXuatExcel = () => {
    alert("Đang xuất file Excel dữ liệu báo cáo giao dịch...");
  };

  const handleAddRow = () => {
    const newRow: GiaoDich = {
      id: Math.random().toString(36).substr(2, 9),
      ngay: "",
      maCK: "",
      laiLo: "lai",
      khoiLuongBan: 0,
      giaBan: 0,
      phiThueBan: 0,
      giaTriBan: 0,
      giaVon: 0,
      giaTriVon: 0,
      laiLoCT: 0,
      phanTramLaiLo: 0,
    };
    const updated = [...allData, newRow];
    setAllData(updated);
    setFilteredData(updated);
    localStorage.setItem("giaoDichData", JSON.stringify(updated));
  };

  const handleEditRow = (id: string, updatedRow: GiaoDich) => {
    const updated = allData.map(r => r.id === id ? updatedRow : r);
    setAllData(updated);
    setFilteredData(updated);
    localStorage.setItem("giaoDichData", JSON.stringify(updated));
  };

  const handleDeleteRow = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa dòng này?")) {
      const updated = allData.filter(r => r.id !== id);
      setAllData(updated);
      setFilteredData(updated);
      localStorage.setItem("giaoDichData", JSON.stringify(updated));
    }
  };

  return (
    <div className="relative w-full bg-[#f2f2f3] border border-[#e7e8e9] border-solid min-h-[243.78px] h-fit pb-[65px] rounded-[4px]" data-name="Background+Border">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[10px] not-italic text-[#545454] text-[12px] top-[50px] w-[59.54px]">
        <p className="leading-[18px]">{`Tài khoản `}</p>
      </div>
      <Input />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[152.69px] not-italic text-[#545454] text-[11.1px] top-[50px] w-[15.53px]">
        <p className="leading-[18px]">[?]</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[10px] not-italic text-[#8229e3] text-[15px] top-[18.5px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">LÃI LỖ ĐÃ THỰC HIỆN</p>
      </div>
      
      <div className="relative pt-[63.39px] px-[12.39px]">
        <BaoCaoGiaoDich
          data={filteredData}
          onXem={handleXem}
          onNgayHienTai={handleNgayHienTai}
          onXuatExcel={handleXuatExcel}
          isEditingMode={isEditingMode}
          onAddRow={handleAddRow}
          onEditRow={handleEditRow}
          onDeleteRow={handleDeleteRow}
        />
      </div>

      <div className="absolute right-[14.4px] bottom-[34px] flex items-center gap-[10px]">
        <div className="bg-white border border-[#8229e3] border-solid h-[15px] w-[20px] flex items-center justify-center cursor-pointer">
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[#8229e3] text-[11px] leading-none">{`<`}</span>
        </div>
        <div className="font-['Inter:Bold',sans-serif] font-bold text-[#8229e3] text-[11.5px] cursor-pointer leading-none">Trước</div>
        <div className="font-['Inter:Bold',sans-serif] font-bold text-[#232323] text-[11px] cursor-pointer leading-none">| 1 |</div>
        <div className="font-['Inter:Bold',sans-serif] font-bold text-[#8229e3] text-[10.8px] cursor-pointer leading-none">Tiếp</div>
        <div className="bg-white border border-[#8229e3] border-solid h-[15px] w-[20px] flex items-center justify-center cursor-pointer">
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[#8229e3] text-[11px] leading-none">{`>`}</span>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.45%_13.07%_14.49%_1.37%]" data-name="Group">
      <div className="absolute inset-[-1.72%_-14.41%_-16.93%_-1.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.4628 68.8191">
          <g filter="url(#filter0_d_1_291)" id="Group">
            <path d={svgPaths.p9aea980} fill="var(--fill-0, #8229E3)" id="Vector" stroke="url(#paint0_linear_1_291)" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p25143880} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p4ec70f2} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p44800} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.8191" id="filter0_d_1_291" width="72.4628" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_291" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_291" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_291" x1="8.2387" x2="61.3487" y1="46.0044" y2="15.3413">
              <stop offset="0.00410002" stopColor="#DBB1FF" />
              <stop offset="1" stopColor="#6200D9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}



export default function Component1920WDefault() {
  const [isEditingMode, setIsEditingMode] = useState(false);

  return (
    <div className="bg-white relative size-full" data-name="1920w default">
      <TableBodyRow />
      <Navigation />
      <Navigation1 />
      <Background3 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[390px] not-italic right-[401.1px] text-[#333] text-[11px] top-[206px]">
        <p className="leading-[normal] whitespace-pre-wrap">{"HNX: Trước phiên(Nhận lệnh)   HOSE: Trước phiên(Nhận lệnh)   UPCOM: Trước phiên(Nhận lệnh)   BOND-F: Đóng cửa(Dừng nhận lệnh)   BONDL-F: Đóng cửa(Dừng nhận lệnh)   INDEX-F: Đóng cửa(Dừng nhận lệnh)   "}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[1212.19px] not-italic right-[574.58px] text-[#8229e3] text-[11px] text-right top-[230.3px] uppercase">
        <p className="leading-[15.4px]">{`DANH MỤC CK CHO VAY `}</p>
      </div>
      <Button />
      <Button1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[390px] not-italic right-[1442.69px] text-[#337ab7] text-[11px] text-center top-[233px] uppercase">
        <p className="leading-[14px]">TIN MỚI NHẤT:</p>
      </div>
      <div className="absolute h-[13px] left-[485.11px] right-[1419.89px] top-[226px]" data-name="Link">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[200%] left-0 max-w-none top-0 w-[373.33%]" src={imgLink2} />
        </div>
      </div>
      <div className="absolute h-[13px] left-[505.11px] right-[1399.89px] top-[226px]" data-name="Link">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[200%] left-[-140%] max-w-none top-0 w-[373.33%]" src={imgLink2} />
        </div>
      </div>
      <Background4 />
      <BackgroundBorder />
      <div className="absolute left-[385px] right-[385px] top-[295px] flex flex-col gap-[25px] w-[1150px] pb-12">
        <BackgroundBorder1 isEditingMode={isEditingMode} />
        <BackgroundHorizontalBorder />
      </div>
      {createPortal(
        <div className="fixed bottom-[30px] right-[30px] z-[99999] cursor-pointer w-[73px] h-[69px]" onClick={() => { setIsEditingMode(!isEditingMode); window.dispatchEvent(new Event('toggleEditingMode')); }} title="Bật/Tắt chế độ chỉnh sửa">
          <Group2 />
        </div>,
        document.body
      )}
    </div>
  );
}