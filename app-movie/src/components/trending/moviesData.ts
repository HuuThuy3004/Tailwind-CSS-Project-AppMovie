import MatBiec from '../../assets/matbiec.jpg'
import KeDocHanh from '../../assets/kedochanh.jpg'
import TrangQuynh from '../../assets/download.jpg'
import DatRungPhuongNam from '../../assets/b1a-poster-4-1695109893-1695173731.jpg'
import LatMat48h from '../../assets/MV5BYzEwYThkYjgtODc3OC00NWFmLTgxZTQtNDQ4YTE0MDUxZTlhXkEyXkFqcGdeQXVyMzQxMzk5NjY@._V1_.jpg'
import NhaBaNu from '../../assets/nhabanu.jpg'
import TiecTrangMau from '../../assets/tiectrangmau.jpg'


export interface Movie {
    src: string,
    titles: string,
    main: string,
    runtime: string
}


export const moviesData: Movie[] = [
    {
        src: MatBiec,
        titles: 'Mắt biếc',
        main: 'Phim điện ảnh chính kịch lãng mạn của Việt Nam năm 2019 do Victor Vũ đạo diễn, kiêm đảm nhiệm .....',
        runtime: '120 phút'
    },
    {
        src: KeDocHanh,
        titles: 'Kẻ độc hành',
        main: 'Sinh ra trong gia đình làm nghề trừ tà, vị pháp sư nghiệp dư nọ sử dụng chuyên môn của mình để bắt ma ở khu phố ngập tràn hoạt động siêu nhiên.',
        runtime: '105 phút'
    },
    {
        src: TrangQuynh,
        titles: 'Trạng Quỳnh',
        main: 'Được phóng tác từ những giai thoại về nhân vật cùng tên trong dân gian Việt Nam, Trạng Quỳnh xoay quanh Quỳnh (Quốc Anh) - một anh chàng thông minh, ma mãnh, rất thích ....',
        runtime: '105 phút'
    },
    {
        src: DatRungPhuongNam,
        titles: 'Đất rừng phương nam',
        main: 'Đất Rừng Phương Nam phiên bản điện ảnh được kế thừa và phát triển từ tiểu thuyết cùng tên của nhà văn Đoàn Giỏi. ',
        runtime: '120 phút'
    },
    {
        src: LatMat48h,
        titles: 'Lật mặt 48h',
        main: 'Câu chuyện của một hội thảo của nhà đầu tư, một nhà ',
        runtime: '115 phút'
    },
    {
        src: NhaBaNu,
        titles: 'Nhà bà nữ',
        main: 'Câu chuyện của một người đã bị thương tật',
        runtime: '115 phút'
    },
    {
        src: TiecTrangMau,
        titles: 'Tiệc trăng máu',
        main: 'Câu chuyện của một người đã bị thương tật.....',
        runtime: '120 phút'
    }
]