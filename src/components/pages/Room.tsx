import { Link } from 'react-router';

const Room = () => {
    return (
        <div className="rounded-lg shadow-lg hover:shadow-2xl transition">
            <Link to={'/rooms/1'}>
                <img
                    className="w-full aspect-video rounded-t-lg"
                    src="room.jpg"
                    alt="Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né - Công Viên Tropicana"
                />
            </Link>
            <div className="p-4">
                <Link className="font-bold line-clamp-2 mb-2.5" to={'/rooms/1'}>
                    Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né - Công Viên Tropicana
                </Link>
                <div className="flex items-center justify-between mb-2.5">
                    <p className="font-medium">
                        <span className="text-gray-400 mr-1.5">khởi hành:</span>01/07/2023
                    </p>
                    <p className="font-medium">
                        <span className="text-gray-400 mr-1.5">Thời gian:</span>3 ngày
                    </p>
                </div>
                <p className="text-sm line-through text-gray-400">4.800.000₫</p>
                <div className="relative flex items-center justify-between mb-4">
                    <p className="text-lg text-red-500 font-bold">4.390.000₫</p>
                    <span className="price-sale w-14 h-6 absolute right-0 top-0 text-center font-bold text-red-500">
                        -9%
                    </span>
                </div>
                <div className="flex items-center justify-between mb-2.5">
                    <p className="font-bold text-primary">Hết ưu đãi</p>
                    <p className="font-medium">
                        Còn lại <span className="font-bold text-primary">3</span> chỗ
                    </p>
                </div>
                <Link
                    className="text-center w-full block py-2.5 bg-blue-600 hover:bg-blue-900 text-white rounded-md font-bold text-lg transition"
                    to={'/booking/1'}
                >
                    Đặt ngay
                </Link>
            </div>
        </div>
    );
};

export default Room;
