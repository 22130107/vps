import { useState } from "react";

export interface GiaoDich {
  id?: string;
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
  isEditingMode?: boolean;
  onAddRow?: () => void;
  onEditRow?: (id: string, updated: GiaoDich) => void;
  onDeleteRow?: (id: string) => void;
}

const fmt = (n: number) => Number(n).toLocaleString("vi-VN");
const fmtPct = (n: number) => `${Number(n).toFixed(2)} %`;

const TD = "border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1";
const TH = "border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]";

export default function BaoCaoGiaoDich({
  data,
  tuNgay: tuNgayInit = "",
  denNgay: denNgayInit = "",
  onXem,
  onNgayHienTai,
  onXuatExcel,
  isEditingMode,
  onAddRow,
  onEditRow,
  onDeleteRow,
}: BaoCaoGiaoDichProps) {
  const [maCK, setMaCK] = useState("");
  const [tuNgay, setTuNgay] = useState(tuNgayInit);
  const [denNgay, setDenNgay] = useState(denNgayInit);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<GiaoDich>>({});

  const totalGiaTriBan = data.reduce((s, r) => s + Number(r.giaTriBan || 0), 0);
  const totalGiaTriVon = data.reduce((s, r) => s + Number(r.giaTriVon || 0), 0);
  const totalLaiLo = data.reduce((s, r) => s + Number(r.laiLoCT || 0), 0);
  const totalPct = totalGiaTriVon ? (totalLaiLo / totalGiaTriVon) * 100 : 0;

  const laiLoColor = (n: number) => n >= 0 ? "text-[rgb(0,_170,_0)]" : "text-[rgb(180,_0,_0)]";

  const handleEditClick = (row: GiaoDich) => {
    setEditingId(row.id || "");
    setEditForm({ ...row });
  };

  const handleSaveClick = (id: string) => {
    if (onEditRow) {
      onEditRow(id, editForm as GiaoDich);
    }
    setEditingId(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: keyof GiaoDich, isNumber?: boolean) => {
    const val = isNumber ? Number(e.target.value) : e.target.value;
    setEditForm({ ...editForm, [field]: val });
  };

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
              className="inline-block font-normal overflow-clip uppercase w-20 ml-[8%] h-[16px] bg-white border-[rgb(118,_118,_118)] border-[0.5px] text-[11px] text-black leading-[normal] pl-1"
              style={{ borderStyle: "inset", textDecoration: "none" }}
            />
          </div>
          <div className="float-left whitespace-nowrap ml-[15px] mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <span className="inline-block w-[95px]" style={{ textDecoration: "none" }}>Từ ngày</span>
            {" "}
            <div className="relative inline-block w-[100px] h-[16px] align-middle">
              <input
                type="text"
                value={tuNgay}
                onChange={(e) => setTuNgay(e.target.value)}
                className={`bg-right bg-no-repeat border absolute inset-0 w-full h-full font-normal overflow-clip border-black text-[11px] text-black leading-[normal] px-1 ${tuNgay ? 'bg-[#e8f0fe]' : 'bg-white pr-[20px]'}`}
                style={{ backgroundImage: tuNgay ? "none" : "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbad5aaba3a4304e8fb493cce754aef7a193da055.png?generation=1779367253303358&alt=media\")", textDecoration: "none" }}
              />
              <input
                type="date"
                onChange={(e) => {
                  if (e.target.value) {
                    const [y, m, d] = e.target.value.split('-');
                    setTuNgay(`${d}/${m}/${y}`);
                  }
                }}
                className={`absolute right-0 top-0 w-[20px] h-full opacity-0 cursor-pointer z-10 ${tuNgay ? 'hidden' : 'block'}`}
              />
            </div>
          </div>
          <div className="float-left whitespace-nowrap mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <span className="inline-block w-[95px]" style={{ textDecoration: "none" }}>Đến ngày</span>
            {" "}
            <div className="relative inline-block w-[100px] h-[16px] align-middle">
              <input
                type="text"
                value={denNgay}
                onChange={(e) => setDenNgay(e.target.value)}
                className={`bg-right bg-no-repeat border absolute inset-0 w-full h-full font-normal overflow-clip border-black text-[11px] text-black leading-[normal] px-1 ${denNgay ? 'bg-[#e8f0fe]' : 'bg-white pr-[20px]'}`}
                style={{ backgroundImage: denNgay ? "none" : "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbad5aaba3a4304e8fb493cce754aef7a193da055.png?generation=1779367253303358&alt=media\")", textDecoration: "none" }}
              />
              <input
                type="date"
                onChange={(e) => {
                  if (e.target.value) {
                    const [y, m, d] = e.target.value.split('-');
                    setDenNgay(`${d}/${m}/${y}`);
                  }
                }}
                className={`absolute right-0 top-0 w-[20px] h-full opacity-0 cursor-pointer z-10 ${denNgay ? 'hidden' : 'block'}`}
              />
            </div>
          </div>
        </div>
        <div className="float-left mb-[7px]">
          <div className="float-left whitespace-nowrap ml-[55px] mr-[10px] mb-[2px] text-[rgb(84,_84,_84)] text-[12px] leading-[18px]">
            <input
              type="button"
              value="Xem"
              onClick={() => onXem?.(maCK, tuNgay, denNgay)}
              className="inline-block font-extrabold overflow-clip text-center whitespace-pre w-20 h-5 bg-[rgb(130,_41,_227)] text-white text-[12.6px] leading-[normal] rounded-[0.625rem] cursor-pointer"
              style={{ appearance: "button", textDecoration: "none" }}
            />
            {" "}
            <input
              type="button"
              value="Ngày hiện tại"
              onClick={onNgayHienTai}
              className="inline-block font-extrabold overflow-clip text-center whitespace-pre w-[120px] h-5 bg-[rgb(127,_127,_127)] text-white text-[12.6px] leading-[normal] rounded-[0.625rem] cursor-pointer"
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

      <div className="mt-[20px] overflow-x-auto">
        <table className="table w-full" style={{ fontFamily: "Tahoma, Verdana" }}>
          <thead
            className="bg-repeat-x table-header-group align-middle bg-[rgb(222,_231,_231)]"
            style={{ backgroundImage: "url(\"https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9b943d9b87ea0d557bed1733bdede386fef42e92.png?generation=1779367253333524&alt=media\")" }}
          >
            <tr className="table-row align-middle">
              <th className={`${TH} w-[150px] min-w-[150px]`}>Ngày</th>
              <th className={`${TH} w-[10%]`}>Mã chứng khoán</th>
              <th className={`${TH} w-[10%]`}>Khối lượng bán</th>
              <th className={`${TH} w-[68px] min-w-[68px]`}>Giá bán</th>
              <th className={`${TH} w-[11.5%]`}>Phí + Thuế bán</th>
              <th className={`${TH} w-[10.3%]`}>Giá trị bán</th>
              <th className={`${TH} w-[87px] min-w-[87px]`}>Giá vốn</th>
              <th className={`${TH} w-[10.2%]`}>Giá trị bán</th>
              <th className={`${TH} w-[100px] min-w-[100px]`}>Lãi/Lỗ</th>
              <th className={TH}>%Lãi/Lỗ</th>
              {isEditingMode && <th className={`${TH} w-[100px]`}>Hành động</th>}
            </tr>
          </thead>
          <tbody className="table-row-group align-middle">
            <tr className="table-row align-middle h-7">
              <td colSpan={2} className={`${TD} text-left font-bold`}>Tổng cộng:</td>
              <td className={`${TD} text-center`}></td>
              <td className={`${TD} text-right`}></td>
              <td className={`${TD} text-right`}></td>
              <td className={`${TD} text-right font-bold`}>{fmt(totalGiaTriBan)}</td>
              <td className={`${TD} text-right`}></td>
              <td className={`${TD} text-right font-bold`}>{fmt(totalGiaTriVon)}</td>
              <td className={`${TD} text-right font-bold ${laiLoColor(totalLaiLo)}`}>{fmt(totalLaiLo)}</td>
              <td className={`${TD} text-right font-bold ${laiLoColor(totalPct)}`}>{fmtPct(totalPct)}</td>
              {isEditingMode && <td className={TD}></td>}
            </tr>
            {data.map((row, i) => {
              const isEditing = isEditingMode && editingId === row.id;
              
              if (isEditing) {
                return (
                  <tr key={row.id || i} className="table-row align-middle bg-[#fffbe6]">
                    <td className={`${TD} p-1`}><input type="text" className="w-full border px-1" value={editForm.ngay || ""} onChange={(e) => handleChange(e, "ngay")} /></td>
                    <td className={`${TD} p-1`}><input type="text" className="w-full border px-1" value={editForm.maCK || ""} onChange={(e) => handleChange(e, "maCK")} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.khoiLuongBan || 0} onChange={(e) => handleChange(e, "khoiLuongBan", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.giaBan || 0} onChange={(e) => handleChange(e, "giaBan", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.phiThueBan || 0} onChange={(e) => handleChange(e, "phiThueBan", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.giaTriBan || 0} onChange={(e) => handleChange(e, "giaTriBan", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.giaVon || 0} onChange={(e) => handleChange(e, "giaVon", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.giaTriVon || 0} onChange={(e) => handleChange(e, "giaTriVon", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.laiLoCT || 0} onChange={(e) => handleChange(e, "laiLoCT", true)} /></td>
                    <td className={`${TD} p-1`}><input type="number" className="w-full border px-1" value={editForm.phanTramLaiLo || 0} onChange={(e) => handleChange(e, "phanTramLaiLo", true)} /></td>
                    <td className={`${TD} text-center`}>
                      <button onClick={() => handleSaveClick(row.id as string)} className="text-green-600 font-bold mr-2 hover:underline">Lưu</button>
                      <button onClick={handleCancelClick} className="text-gray-500 font-bold hover:underline">Hủy</button>
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={row.id || i} className="table-row align-middle hover:bg-[#f5f5f5]">
                  <td className={`${TD} text-left`}>{row.ngay}</td>
                  <td className={`${TD} text-center font-bold ${row.laiLo === "lai" ? "text-[rgb(0,_170,_0)]" : "text-[rgb(180,_0,_0)]"}`}>{row.maCK}</td>
                  <td className={`${TD} text-right`}>{fmt(row.khoiLuongBan)}</td>
                  <td className={`${TD} text-right`}>{fmt(row.giaBan)}</td>
                  <td className={`${TD} text-right`}>{fmt(row.phiThueBan)}</td>
                  <td className={`${TD} text-right font-bold`}>{fmt(row.giaTriBan)}</td>
                  <td className={`${TD} text-right`}>{fmt(row.giaVon)}</td>
                  <td className={`${TD} text-right font-bold`}>{fmt(row.giaTriVon)}</td>
                  <td className={`${TD} text-right font-bold ${laiLoColor(row.laiLoCT)}`}>{fmt(row.laiLoCT)}</td>
                  <td className={`${TD} text-right font-bold ${laiLoColor(row.phanTramLaiLo)}`}>{fmtPct(row.phanTramLaiLo)}</td>
                  {isEditingMode && (
                    <td className={`${TD} text-center space-x-2`}>
                      <button onClick={() => handleEditClick(row)} className="text-blue-600 hover:underline">Sửa</button>
                      <button onClick={() => onDeleteRow && onDeleteRow(row.id as string)} className="text-red-600 hover:underline ml-1">Xóa</button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {isEditingMode && (
          <div className="mt-3 text-right">
            <button
              onClick={onAddRow}
              className="px-4 py-1.5 bg-[#8229e3] text-white font-bold rounded shadow hover:bg-[#6e22c1]"
            >
              + Thêm dòng mới
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
