import React from 'react';

interface StockData {
  id: number;
  code: string;
  codeColor?: string;
  total: string;
  canSell: string;
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
  totalPages?: number;
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
  data = defaultData,
  totalValue = '105,066',
  totalMarketValue = '109,250',
  totalProfitLoss = '4,184',
  totalProfitLossPercent = '3.98%',
  currentPage = 1,
  totalPages = 1,
  onPrevPage,
  onNextPage,
  onSearchChange,
  searchValue = '',
}: StockPortfolioProps) {
  return (
    <div className="font-bold h-fit text-[rgb(34,_34,_34)] text-[12px] leading-[normal] w-fit max-w-full mx-auto" style={{ fontFamily: 'Verdana, Arial, sans-serif', textDecoration: 'none' }}>
      {/* Header with search */}
      <div className="items-center flex justify-between flex-wrap">
        <span className="self-start block grow italic text-left mt-[3px] bg-[rgb(254,_245,_212)] text-[rgb(40,_40,_40)] basis-[0%] text-[11px] shrink-0 min-w-0">
          Đơn vị giá: 1000 đồng - Đơn vị khối lượng: 1 cổ phiếu - Đơn vị tiền : đồng
        </span>
        <div className="flex grow mb-[15px] basis-[0%] gap-[10px] shrink-0">
          <label className="self-center block text-right whitespace-nowrap">Mã chứng khoán</label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="border block font-normal overflow-clip uppercase w-[100px] max-w-[150px] bg-white border-[rgb(177,_177,_177)] text-black pt-[6px] pr-[10px] pb-[6px] pl-[10px] rounded-[0.625rem]"
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
          </colgroup>
          <thead className="bg-repeat-x table-header-group align-middle bg-[rgb(222,_231,_231)]" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9b943d9b87ea0d557bed1733bdede386fef42e92.png?generation=1779367253333524&alt=media")' }}>
            <tr className="table-row align-middle">
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">STT</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Mã CK</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Tổng</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Có thể bán</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">KL<br />FS</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CP<br />Cổ tức thưởng</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Không<br />khả dụng</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Hưởng<br />quyền</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK bán<br />chờ khớp</th>
              <th colSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">T2</th>
              <th colSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">T1</th>
              <th colSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">T0</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Giá TB</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Giá trị</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Giá TT</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Giá trị TT</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Lãi/Lỗ<br />dự tính</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">%lãi/Lỗ<br />dự tính</th>
              <th rowSpan={2} className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">Đặt Lệnh</th>
            </tr>
            <tr className="table-row align-middle">
              <th className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK mua</th>
              <th className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK bán</th>
              <th className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK mua</th>
              <th className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK bán</th>
              <th className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK mua</th>
              <th className="border table-cell text-center align-middle border-[rgb(183,_186,_188)] text-[11px] pt-[3px] pr-[2px] pb-[3px] pl-[2px]">CK bán</th>
            </tr>
          </thead>
          <tbody className="table-row-group align-middle">
            <tr className="table-row align-middle bg-[rgb(224,_224,_224)]">
              <td colSpan={15} className="border table-cell text-left align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(0,_170,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">TỔNG CỘNG:</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">{totalValue}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1"></td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">{totalMarketValue}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(0,_170,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">{totalProfitLoss}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(0,_170,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">{totalProfitLossPercent}</td>
              <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(180,_0,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1"></td>
            </tr>
            {data.map((stock) => (
              <tr key={stock.id} className="table-row align-middle">
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">{stock.id}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-center', color: stock.codeColor }}>{stock.code}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}>{stock.total}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}>{stock.canSell}</td>
                <td className="border table-cell text-right align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1"></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}></td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}>{stock.price}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}>{stock.priceComma}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}>{stock.marketPrice}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right' }}>{stock.marketPriceComma}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right', color: stock.profitLossColor }}>{stock.profitLoss}</td>
                <td className="border table-cell align-middle bg-white border-[rgb(183,_186,_188)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1" style={{ textAlign: '-webkit-right', color: stock.profitLossColor }}>{stock.profitLossPercent}</td>
                <td className="border table-cell text-center align-middle bg-white border-[rgb(183,_186,_188)] text-[rgb(180,_0,_0)] text-[11px] pt-[6px] pr-1 pb-[6px] pl-1">
                  <a className="text-center underline uppercase bg-[rgb(177,_19,_43)] text-white pt-1 pr-2 pb-1 pl-2 cursor-pointer" style={{ textDecoration: 'underline' }}>BÁN</a>
                </td>
              </tr>
            ))}
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
      <div className="clear-both w-full">
        <div className="italic mt-[3px] bg-[rgb(254,_245,_212)] text-[rgb(40,_40,_40)] text-[11px] mb-1">
          <b className="italic">• Lãi/Lỗ</b> là giá trị tạm tính ở thời điểm hiện tại, chưa bao gồm thuế và phí giao dịch khi Quý khách bán chứng khoán.
        </div>
        <div className="italic mt-[3px] bg-[rgb(254,_245,_212)] text-[rgb(40,_40,_40)] text-[11px]">
          <b className="italic text-right">• Giá TB</b> được VPS tính theo phương pháp bình quân gia quyền và chỉ mang tính chất tham khảo.{' '}
          <span className="italic text-right">
            <span className="inline-block relative text-right top-px text-[rgb(183,_186,_188)] leading-[11px]" style={{ fontFamily: '"Glyphicons Halflings"', textDecoration: 'none' }}>
              <span className="text-right origin-[0px_0px] content-['']" style={{ textDecoration: 'rgb(183, 186, 188)' }}></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
