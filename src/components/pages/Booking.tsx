import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const formBookingSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    phoneNumber: yup
        .string()
        .matches(/^[0][0-9]{9}$/, 'Phone number must start with 0 and be 10 digits long')
        .required('Phone Number is required'),
    numberOfGuests: yup.number().min(1, 'At least one guest is required').required('Number of Guests is required'),
    pickupOption: yup
        .string()
        .oneOf(['pickup', 'meetup'], 'Pick-up option must be either "pickup" or "meetup"')
        .required(),
    pickupLocation: yup.string().when('pickupOption', {
        is: 'pickup',
        then: (schema) => schema.required('Pickup Location is required if your option is "Pick me up"'),
        otherwise: (schema) => schema.notRequired(),
    }),
    termAccepted: yup.boolean().oneOf([true], 'You have to accept our terms to continue'),
});

type FormBookingValues = yup.InferType<typeof formBookingSchema>;

type FormBookingDefaults = Partial<FormBookingValues>;

const defaultValues: FormBookingDefaults = {
    fullName: '',
    email: '',
    phoneNumber: '',
    numberOfGuests: 1,
    pickupOption: 'pickup',
    pickupLocation: '',
    termAccepted: false,
};

const Booking: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormBookingValues>({
        resolver: yupResolver(formBookingSchema) as any, // FIXME: Type mismatch due to resolver type inference bug with Yup and RHF

        defaultValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            numberOfGuests: 1,
            pickupOption: 'pickup',
            pickupLocation: '',
            termAccepted: false,
        },
    });

    const onSubmit = (data: FormBookingValues) => {
        console.log(data);
    };

    return (
        <div className="max-w-3xl mx-auto my-8 p-4 bg-gray-200 rounded-2xl">
            <h1 className="capitalize text-center text-4xl pb-5">Cycling tour booking form</h1>
            <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
                {/* Tour Name */}
                <div className="w-full flex flex-col mb-5">
                    <label htmlFor="tour_name" className=" capitalizefont-medium mb-2">
                        Tour Name
                    </label>
                    <input
                        type="text"
                        id="tour_name"
                        name="tour_name"
                        placeholder="Enter Your Name"
                        value={'Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né - Công Viên Tropicana'}
                        className="border border-gray-500 rounded-md py-2 pl-3 outline-0 bg-gray-500 text-gray-300"
                        readOnly
                    />
                </div>
                {/* Full Name */}
                <div className="w-full flex flex-col mb-5">
                    <label htmlFor="fullName" className="capitalize font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter Full Name"
                        className="border border-gray-500 rounded-md py-2 pl-3 outline-0"
                        autoComplete="off"
                        {...register('fullName')}
                    />
                    {errors.fullName && (
                        <span className="text-red-600 text-sm mt-1 italic">{errors.fullName.message}</span>
                    )}
                </div>
                <div className="w-full grid grid-cols-2 gap-5">
                    <div className="w-full flex flex-col mb-5">
                        <label htmlFor="email" className="capitalize font-medium mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter Email"
                            className="border border-gray-500 rounded-md py-2 pl-3 outline-0"
                            autoComplete="off"
                            {...register('email')}
                        />
                        {errors.email && (
                            <span className="text-red-600 text-sm mt-1 italic">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="w-full flex flex-col mb-5">
                        <label htmlFor="phoneNumber" className="capitalize font-medium mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="Enter Phone Number"
                            className="border border-gray-500 rounded-md py-2 pl-3 outline-0"
                            autoComplete="off"
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-600 text-sm mt-1 italic">{errors.phoneNumber.message}</span>
                        )}
                    </div>
                </div>
                <div className="w-full flex flex-col mb-5">
                    <label htmlFor="numberOfGuests" className="capitalize font-medium mb-2">
                        Number of Guests
                    </label>
                    <input
                        type="text"
                        id="numberOfGuests"
                        placeholder="Enter Pickup Location"
                        className="border border-gray-500 rounded-md py-2 pl-3 outline-0"
                        autoComplete="off"
                        {...register('numberOfGuests')}
                    />
                    {errors.numberOfGuests && (
                        <span className="text-red-600 text-sm mt-1 italic">{errors.numberOfGuests.message}</span>
                    )}
                </div>
                <div className="w-full flex flex-col items-start mb-5">
                    <p className="capitalize font-medium mb-2">Pickup Option</p>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="pickupOption_pickup"
                                className="scheme-light cursor-pointer"
                                value={'pickup'}
                                {...register('pickupOption')}
                            />
                            <label htmlFor="pickupOption_pickup" className="capitalize font-medium ml-2 cursor-pointer">
                                Pick me up
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="pickupOption_meetup"
                                className="scheme-light cursor-pointer"
                                value={'meetup'}
                                {...register('pickupOption')}
                            />
                            <label htmlFor="pickupOption_meetup" className="capitalize font-medium ml-2 cursor-pointer">
                                I'll meet up
                            </label>
                        </div>
                    </div>
                    {errors.pickupOption && (
                        <span className="text-red-600 text-sm mt-1 italic">{errors.pickupOption.message}</span>
                    )}
                </div>
                <div className="w-full flex flex-col mb-5">
                    <label htmlFor="pickupLocation" className="capitalize font-medium mb-2">
                        Pickup Location (If you want us to pick you up)
                    </label>
                    <input
                        type="text"
                        id="pickupLocation"
                        placeholder="Enter Pickup Location"
                        className="border border-gray-500 rounded-md py-2 pl-3 outline-0"
                        autoComplete="off"
                        {...register('pickupLocation')}
                    />
                    {errors.pickupLocation && (
                        <span className="text-red-600 text-sm mt-1 italic">{errors.pickupLocation.message}</span>
                    )}
                </div>
                <div className="w-full flex flex-col mb-5">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="termAccepted"
                            className="scheme-light cursor-pointer"
                            {...register('termAccepted')}
                        />
                        <label htmlFor="termAccepted" className="capitalize font-medium ml-2 cursor-pointer">
                            I accept the terms and conditions
                        </label>
                    </div>
                    {errors.termAccepted && (
                        <span className="text-red-600 text-sm mt-1 italic">{errors.termAccepted.message}</span>
                    )}
                </div>
                <button type="submit" className="text-white bg-primary">
                    Booking Submit
                </button>
            </form>
        </div>
    );
};

export default Booking;
