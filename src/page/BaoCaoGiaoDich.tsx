import { useState } from "react";

export interface GiaoDich {
  ngay: string;
  maCK: string;
  laiLo: "lai" | "lo";
  khoiLuongBan: number;
  giaBan: number;
  phiThueBan: number;
  giaTriBan: number;
  giaVon: number;
  giaTriVon: number;
  laiLoCT: number;
  phanTramLaiLo: number;
}

export interface BaoCaoGiaoDichProps {
  data: GiaoDich[];
  tuNgay?: string;
  denNgay?: string;
  onXem?: (maCK: string, tuNgay: string, denNgay: string) => void;
  onNgayHienTai?: () => void;
  onXuatExcel?: () => void;
}

const fmt = (n: number) => n.toLocaleString("vi-VN");
const fmtPct = (n: number) => `${n.toFixed(2)} %`;

const TD = "border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1";
const TH = "border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]";

export default function BaoCaoGiaoDich({
  data,
  tuNgay: tuNgayInit = "",
  denNgay: denNgayInit = "",
  onXem,
  onNgayHienTai,
  onXuatExcel,
}: BaoCaoGiaoDichProps) {
  const [maCK, setMaCK] = useState("");
  const [tuNgay, setTuNgay] = useState(tuNgayInit);
  const [denNgay, setDenNgay] = useState(denNgayInit);

  const totalGiaTriBan = data.reduce((s, r) => s + r.giaTriBan, 0);
  const totalGiaTriVon = data.reduce((s, r) => s + r.giaTriVon, 0);
  const totalLaiLo = data.reduce((s, r) => s + r.laiLoCT, 0);
  const totalPct = totalGiaTriVon ? (totalLaiLo / totalGiaTriVon) * 100 : 0;

  const laiLoColor = (n: number) => n >= 0 ? "text-[rgb(0,_170,_0)]" : "text-[rgb(180,_0,_0)]";

  return (
    <div
      className="font-bold h-fit mx-auto mb-[10px] border-[rgb(172,_168,_168)] border-[4px] text-[rgb(51,_51,_51)] text-[12px] leading-[normal] min-h-[116px] pt-[10px] pr-[5px] pb-[10px] pl-[5px] w-full max-w-[1200px]"
      style={{ fontFamily: "Verdana, Arial, sans-serif" }}
    >
      <div className="overflow-hidden mt-[10px] mb-[5px] text-[10px]">
        <div className="float-left ml-[75px] mb-[5px]">
          <div className="float-left whitespace-nowrap mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <span className="inline-block w-[95px]" style={{ textDecoration: "none" }}>Mã chứng khoán</span>
            {" "}
            <input
              type="text"
              value={maCK}
              onChange={(e) => setMaCK(e.target.value.toUpperCase())}
              className="inline-block font-normal overflow-clip uppercase w-20 ml-[8%] bg-white border-[rgb(118,_118,_118)] border-[2px] text-black leading-[normal]"
              style={{ borderStyle: "inset", textDecoration: "none" }}
            />
          </div>
          <div className="float-left whitespace-nowrap ml-[15px] mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <span className="inline-block w-[95px]" style={{ textDecoration: "none" }}>Từ ngày</span>
            {" "}
            <input
              type="text"
              value={tuNgay}
              onChange={(e) => setTuNgay(e.target.value)}
              className="bg-right bg-no-repeat border inline-block font-normal overflow-clip w-[100px] bg-white border-black text-black leading-[normal]"
              style={{ backgroundImage: "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbad5aaba3a4304e8fb493cce754aef7a193da055.png?generation=1779367253303358&alt=media\")", textDecoration: "none" }}
            />
          </div>
          <div className="float-left whitespace-nowrap mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <span className="inline-block w-[95px]" style={{ textDecoration: "none" }}>Đến ngày</span>
            {" "}
            <input
              type="text"
              value={denNgay}
              onChange={(e) => setDenNgay(e.target.value)}
              className="bg-right bg-no-repeat border inline-block font-normal overflow-clip w-[100px] bg-white border-black text-black leading-[normal]"
              style={{ backgroundImage: "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbad5aaba3a4304e8fb493cce754aef7a193da055.png?generation=1779367253303358&alt=media\")", textDecoration: "none" }}
            />
          </div>
        </div>
        <div className="float-left mb-[7px]">
          <div className="float-left whitespace-nowrap ml-[55px] mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <input
              type="button"
              value="Xem"
              onClick={() => onXem?.(maCK, tuNgay, denNgay)}
              className="inline-block overflow-clip text-center whitespace-pre w-20 h-5 bg-[rgb(130,_41,_227)] text-white text-[13px] leading-[normal] rounded-[0.625rem] cursor-pointer"
              style={{ appearance: "button", textDecoration: "none" }}
            />
            {" "}
            <input
              type="button"
              value="Ngày hiện tại"
              onClick={onNgayHienTai}
              className="inline-block overflow-clip text-center whitespace-pre w-[120px] h-5 bg-[rgb(127,_127,_127)] text-white text-[13px] leading-[normal] rounded-[0.625rem] cursor-pointer"
              style={{ appearance: "button", textDecoration: "none" }}
            />
            <a
              onClick={onXuatExcel}
              className="bg-no-repeat block float-right ml-[10px] bg-[position:0px_-1460px] text-[rgb(138,_135,_135)] text-[11px] leading-[normal] pt-0 pr-0 pb-0 pl-5 cursor-pointer"
              style={{ backgroundImage: "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fda07d1e29a61843e5b0a28ddbe7701c16350ad8d.png?generation=1779367253091159&alt=media\")", fontFamily: "Arial" }}
            >
              Xuất file Excel
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <table className="table w-full" style={{ fontFamily: "Tahoma, Verdana" }}>
          <thead
            className="bg-repeat-x table-header-group align-middle bg-[rgb(222,_231,_231)]"
            style={{ backgroundImage: "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9b943d9b87ea0d557bed1733bdede386fef42e92.png?generation=1779367253333524&alt=media\")" }}
          >
            <tr className="table-row align-middle">
              <th className={`${TH} w-[190px] min-w-[190px]`}>Ngày</th>
              <th className={`${TH} w-[10%]`}>Mã chứng khoán</th>
              <th className={`${TH} w-[10%]`}>Khối lượng bán</th>
              <th className={`${TH} w-[68px] min-w-[68px]`}>Giá bán</th>
              <th className={`${TH} w-[11.5%]`}>Phí + Thuế bán</th>
              <th className={`${TH} w-[10.3%]`}>Giá trị bán</th>
              <th className={`${TH} w-[87px] min-w-[87px]`}>Giá vốn</th>
              <th className={`${TH} w-[10.2%]`}>Giá trị bán</th>
              <th className={`${TH} w-[100px] min-w-[100px]`}>Lãi/Lỗ</th>
              <th className={TH}>%Lãi/Lỗ</th>
            </tr>
          </thead>
          <tbody className="table-row-group align-middle">
            <tr className="table-row align-middle h-7">
              <td colSpan={2} className={`${TD} text-left`}>Tổng cộng:</td>
              <td className={`${TD} text-center`}></td>
              <td className={`${TD} text-right`}></td>
              <td className={`${TD} text-right`}></td>
              <td className={`${TD} text-right`}>{fmt(totalGiaTriBan)}</td>
              <td className={`${TD} text-right`}></td>
              <td className={`${TD} text-right`}>{fmt(totalGiaTriVon)}</td>
              <td className={`${TD} text-right ${laiLoColor(totalLaiLo)}`}>{fmt(totalLaiLo)}</td>
              <td className={`${TD} text-right ${laiLoColor(totalPct)}`}>{fmtPct(totalPct)}</td>
            </tr>
            {data.map((row, i) => (
              <tr key={i} className="table-row align-middle">
                <td className={`${TD} text-left`}>{row.ngay}</td>
                <td className={`${TD} text-center ${row.laiLo === "lai" ? "text-[rgb(0,_170,_0)]" : "text-[rgb(180,_0,_0)]"}`}>{row.maCK}</td>
                <td className={`${TD} text-right`}>{fmt(row.khoiLuongBan)}</td>
                <td className={`${TD} text-right`}>{fmt(row.giaBan)}</td>
                <td className={`${TD} text-right`}>{fmt(row.phiThueBan)}</td>
                <td className={`${TD} text-right`}>{fmt(row.giaTriBan)}</td>
                <td className={`${TD} text-right`}>{fmt(row.giaVon)}</td>
                <td className={`${TD} text-right`}>{fmt(row.giaTriVon)}</td>
                <td className={`${TD} text-right ${laiLoColor(row.laiLoCT)}`}>{fmt(row.laiLoCT)}</td>
                <td className={`${TD} text-right ${laiLoColor(row.phanTramLaiLo)}`}>{fmtPct(row.phanTramLaiLo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
