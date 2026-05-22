import { useState, useEffect } from 'react';
interface StockData {
  id: number;
  code: string;
  codeColor?: string;
  total: string;
  canSell: string;
  klFs?: string;
  cpCoTucThuong?: string;
  khongKhaDung?: string;
  huongQuyen?: string;
  ckBanChoKhop?: string;
  t2CkMua?: string;
  t2CkBan?: string;
  t1CkMua?: string;
  t1CkBan?: string;
  t0CkMua?: string;
  t0CkBan?: string;
  price: string;
  priceComma: string;
  marketPrice: string;
  marketPriceComma: string;
  profitLoss: string;
  profitLossPercent: string;
  profitLossColor: string;
}

interface StockPortfolioProps {
  data?: StockData[];
  totalValue?: string;
  totalMarketValue?: string;
  totalProfitLoss?: string;
  totalProfitLossPercent?: string;
  currentPage?: number;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

const defaultData: StockData[] = [
  {
    id: 1,
    code: 'FTS',
    codeColor: 'rgb(180, 0, 0)',
    total: '1',
    canSell: '1',
    price: '24.946',
    priceComma: '24,946',
    marketPrice: '24.350',
    marketPriceComma: '24,350',
    profitLoss: '-596',
    profitLossPercent: '-2.39%',
    profitLossColor: 'rgb(180, 0, 0)',
  },
  {
    id: 2,
    code: 'GAS',
    codeColor: 'rgb(0, 170, 0)',
    total: '1',
    canSell: '1',
    price: '80.120',
    priceComma: '80,120',
    marketPrice: '84.900',
    marketPriceComma: '84,900',
    profitLoss: '4,780',
    profitLossPercent: '5.97%',
    profitLossColor: 'rgb(0, 170, 0)',
  },
];

export default function StockPortfolio({
  currentPage = 1,
  onPrevPage,
  onNextPage,
  onSearchChange,
  searchValue = '',
}: StockPortfolioProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [stocks, setStocks] = useState<StockData[]>(() => {
    const saved = localStorage.getItem('vps_stocks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore JSON parse error
      }
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem('vps_stocks', JSON.stringify(stocks));
  }, [stocks]);

  useEffect(() => {
    const handleToggle = () => setIsEditing(prev => !prev);
    window.addEventListener('toggleEditingMode', handleToggle);
    return () => window.removeEventListener('toggleEditingMode', handleToggle);
  }, []);

  const handleAddRow = () => {
    setStocks(prev => [...prev, {
      id: prev.length ? Math.max(...prev.map(s => s.id)) + 1 : 1,
      code: 'NEW',
      codeColor: 'rgb(0, 0, 0)',
      total: '0',
      canSell: '0',
      klFs: '',
      cpCoTucThuong: '',
      khongKhaDung: '',
      huongQuyen: '',
      ckBanChoKhop: '',
      t2CkMua: '',
      t2CkBan: '',
      t1CkMua: '',
      t1CkBan: '',
      t0CkMua: '',
      t0CkBan: '',
      price: '0.000',
      priceComma: '0,000',
      marketPrice: '0.000',
      marketPriceComma: '0,000',
      profitLoss: '0',
      profitLossPercent: '0%',
      profitLossColor: 'rgb(0, 0, 0)',
    }]);
  };

  const parseNumber = (str: string) => {
    if (!str) return 0;
    const parsed = parseFloat(str.replace(/,/g, ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  const handleChange = (id: number, field: keyof StockData, value: string) => {
    setStocks(prev => prev.map(stock => {
      if (stock.id !== id) return stock;
      const updatedStock = { ...stock, [field]: value };
      
      if (field === 'total' || field === 'price' || field === 'marketPrice') {
        const totalNum = parseNumber(updatedStock.total);
        const priceNum = parseNumber(updatedStock.price);
        const marketPriceNum = parseNumber(updatedStock.marketPrice);
        
        // Giá trị = Tổng * Giá
        updatedStock.priceComma = formatNumber(totalNum * priceNum);
        updatedStock.marketPriceComma = formatNumber(totalNum * marketPriceNum);
      }
      
      return updatedStock;
    }));
  };

  const handleDeleteRow = (id: number) => {
    setStocks(prev => prev.filter(stock => stock.id !== id));
  };

  const getProfitLossColor = (val: string) => {
    const num = parseNumber(val);
    if (num > 0) return 'rgb(0, 170, 0)';
    if (num < 0) return 'rgb(222, 0, 0)';
    return 'rgb(0, 0, 0)';
  };

  const calcTotalValue = stocks.reduce((sum, stock) => sum + parseNumber(stock.priceComma), 0);
  const calcTotalMarketValue = stocks.reduce((sum, stock) => sum + parseNumber(stock.marketPriceComma), 0);
  const calcTotalProfitLoss = stocks.reduce((sum, stock) => sum + parseNumber(stock.profitLoss), 0);
  const calcTotalProfitLossPercent = calcTotalValue === 0 ? 0 : (calcTotalProfitLoss / calcTotalValue) * 100;

  const totalValue = formatNumber(calcTotalValue);
  const totalMarketValue = formatNumber(calcTotalMarketValue);
  const totalProfitLoss = formatNumber(calcTotalProfitLoss);
  const totalProfitLossPercent = calcTotalProfitLossPercent.toFixed(2) + '%';
  const totalColor = calcTotalProfitLoss >= 0 ? 'rgb(0, 170, 0)' : 'rgb(222, 0, 0)';

  return (
    <div className="relative -left-[2px] font-bold h-fit text-[rgb(34,_34,_34)] text-[12px] leading-[normal] w-fit max-w-full mx-auto" style={{ fontFamily: 'Verdana, Arial, sans-serif', textDecoration: 'none' }}>
      {/* Header with search */}
      <div className="flex justify-between items-start mb-[15px] w-full">
        <b className="italic mt-[3px] bg-[rgb(254,_245,_212)] text-[rgb(40,_40,_40)] text-[11px] w-[552px] inline-block text-left px-1">
          Đơn vị giá: 1000 đồng - Đơn vị khối lượng: 1 cổ phiếu - Đơn vị tiền : đồng
        </b>
        <div className="flex items-center gap-[10px]">
          <label className="whitespace-nowrap font-bold text-[#222] text-[14px] font-['Inter',sans-serif]">Mã chứng khoán</label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="border block font-normal uppercase w-[190px] h-[30px] bg-white border-[#b1b1b1] text-black px-[10px] rounded-[10px] outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="table-fixed min-w-[1086px]" style={{ fontFamily: 'Tahoma, Verdana' }}>
          <colgroup>
            <col style={{ width: '27px' }} />
            <col style={{ width: '41px' }} />
            <col style={{ width: '34px' }} />
            <col style={{ width: '67px' }} />
            <col style={{ width: '20px' }} />
            <col style={{ width: '88px' }} />
            <col style={{ width: '60px' }} />
            <col style={{ width: '44px' }} />
            <col style={{ width: '58px' }} />
            <col style={{ width: '49px' }} />
            <col style={{ width: '46px' }} />
            <col style={{ width: '46px' }} />
            <col style={{ width: '46px' }} />
            <col style={{ width: '49px' }} />
            <col style={{ width: '46px' }} />
            <col style={{ width: '50px' }} />
            <col style={{ width: '57px' }} />
            <col style={{ width: '50px' }} />
            <col style={{ width: '58px' }} />
            <col style={{ width: '47px' }} />
            <col style={{ width: '53px' }} />
            <col style={{ width: '58px' }} />
            {isEditing && <col style={{ width: '60px' }} />}
          </colgroup>
          <thead className="h-[40px] bg-repeat-x table-header-group align-middle bg-[rgb(222,_231,_231)]" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9b943d9b87ea0d557bed1733bdede386fef42e92.png?generation=1779367253333524&alt=media")' }}>
            <tr className="table-row align-middle h-[20px]">
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">STT</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Mã CK</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Tổng</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Có thể bán</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">KL<br />FS</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CP<br />Cổ tức thưởng</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Không<br />khả dụng</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Hưởng<br />quyền</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK bán<br />chờ khớp</th>
              <th colSpan={2} className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">T2</th>
              <th colSpan={2} className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">T1</th>
              <th colSpan={2} className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">T0</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Giá TB</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Giá trị</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Giá TT</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Giá trị TT</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Lãi/Lỗ<br />dự tính</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">%lãi/Lỗ<br />dự tính</th>
              <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">Đặt Lệnh</th>
              {isEditing && <th rowSpan={2} className="h-[40px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap text-red-600">Thao tác</th>}
            </tr>
            <tr className="table-row align-middle h-[20px]">
              <th className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK mua</th>
              <th className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK bán</th>
              <th className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK mua</th>
              <th className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK bán</th>
              <th className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK mua</th>
              <th className="h-[20px] border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] px-[2px] py-0 leading-[11px] whitespace-nowrap">CK bán</th>
            </tr>
          </thead>
          <tbody className="table-row-group align-middle">
            <tr className="table-row align-middle bg-[rgb(224,_224,_224)]">
              <td colSpan={16} className="border table-cell text-left align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(0,_170,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 font-bold uppercase">TỔNG CỘNG:</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 font-bold">{totalValue}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1"></td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 font-bold">{totalMarketValue}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 font-bold" style={{ color: totalColor }}>{totalProfitLoss}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 font-bold" style={{ color: totalColor }}>{totalProfitLossPercent}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(180,_0,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1"></td>
              {isEditing && <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)]"></td>}
            </tr>
            {stocks.map((stock) => (
              <tr key={stock.id} className={`table-row align-middle ${isEditing ? 'hover:bg-gray-100' : ''}`}>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">{stock.id}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'code', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none uppercase ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-center', color: getProfitLossColor(stock.profitLoss) }}
                >{stock.code}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'total', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.total}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'canSell', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.canSell}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'klFs', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.klFs}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'cpCoTucThuong', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.cpCoTucThuong}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'khongKhaDung', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.khongKhaDung}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'huongQuyen', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.huongQuyen}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'ckBanChoKhop', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.ckBanChoKhop}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 't2CkMua', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.t2CkMua}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 't2CkBan', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.t2CkBan}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 't1CkMua', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.t1CkMua}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 't1CkBan', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.t1CkBan}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 't0CkMua', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.t0CkMua}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 't0CkBan', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.t0CkBan}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'price', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.price}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'priceComma', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.priceComma}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'marketPrice', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.marketPrice}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'marketPriceComma', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right' }}
                >{stock.marketPriceComma}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'profitLoss', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right', color: getProfitLossColor(stock.profitLoss) }}
                >{stock.profitLoss}</td>
                <td 
                  contentEditable={isEditing} suppressContentEditableWarning onBlur={e => handleChange(stock.id, 'profitLossPercent', e.currentTarget.textContent || '')}
                  className={`border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1 outline-none ${isEditing ? 'bg-yellow-50' : ''}`} 
                  style={{ textAlign: '-webkit-right', color: getProfitLossColor(stock.profitLossPercent) }}
                >{stock.profitLossPercent}</td>
                <td className="border table-cell text-center align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(180,_0,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">
                  <a className="text-center underline uppercase bg-[rgb(177,_19,_43)] text-white pt-1 pr-2 pb-1 pl-2 cursor-pointer" style={{ textDecoration: 'underline' }}>BÁN</a>
                </td>
                {isEditing && (
                  <td className="border table-cell text-center align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">
                    <button onClick={() => handleDeleteRow(stock.id)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded cursor-pointer">Xóa</button>
                  </td>
                )}
              </tr>
            ))}
            {isEditing && (
              <tr className="table-row align-middle bg-white">
                <td colSpan={23} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] py-2">
                  <button onClick={handleAddRow} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded cursor-pointer font-normal">+ Thêm dòng mới</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mb-[15px] clear-both">
        <div className="text-right w-full">
          <div className="inline-flex items-center font-normal mt-[5px] mb-[5px] text-[9.6px] gap-0" style={{ fontFamily: 'Arial, Verdana, Helvetica, sans-serif' }}>
            <a
              onClick={onPrevPage}
              className="border font-bold text-center ml-[2px] mr-[2px] bg-white border-[rgb(130,_41,_227)] text-[rgb(130,_41,_227)] text-[11px] leading-[11px] pb-px pt-px pr-[5px] pl-[5px] cursor-pointer"
              style={{ fontFamily: 'Arial' }}
            >
              &lt;
            </a>
            <a
              onClick={onPrevPage}
              className="font-bold text-[rgb(130,_41,_227)] text-[11.52px] pt-0 pr-[3px] pb-0 pl-[3px] cursor-pointer"
            >
              Trước
            </a>
            <a className="font-bold text-[rgb(35,_35,_35)] text-[11.52px] pt-0 pr-[3px] pb-0 pl-[3px]">|  {currentPage}  |</a>
            <a
              onClick={onNextPage}
              className="font-bold text-[rgb(130,_41,_227)] text-[11.52px] pt-0 pr-[3px] pb-0 pl-[3px] cursor-pointer"
            >
              Tiếp
            </a>
            <a
              onClick={onNextPage}
              className="border font-bold text-center ml-[2px] mr-[2px] bg-white border-[rgb(130,_41,_227)] text-[rgb(130,_41,_227)] text-[11px] leading-[11px] pb-px pt-px pr-[5px] pl-[5px] cursor-pointer"
              style={{ fontFamily: 'Arial' }}
            >
              &gt;
            </a>
          </div>
        </div>
      </div>

      {/* Footer notes */}
      <div className="clear-both w-full flex flex-col items-start mt-[3px]">
        <div className="italic bg-[rgb(254,_245,_212)] text-[rgb(40,_40,_40)] text-[11px] px-1">
          • Lãi/Lỗ là giá trị tạm tính ở thời điểm hiện tại, chưa bao gồm thuế và phí giao dịch khi Quý khách bán chứng khoán.
        </div>
        <div className="italic bg-[rgb(254,_245,_212)] text-[rgb(40,_40,_40)] text-[11px] px-1">
          • Giá TB được VPS tính theo phương pháp bình quân gia quyền và chỉ mang tính chất tham khảo.
        </div>
      </div>
    </div>
  );
}
