import './CheckUp.css'

const CheckUp = () => {
    return (
        <div className='CheckUpBg'>
         <div className='CheckUp'>
         <h2 className='text-center text-2xl font-bold mb-4'>OPENING HOURS</h2>
            <div className='flex items-center justify-center mb-4'>
                <p className='text-lg'>Monday - Friday</p>
                <span></span>
                <p className='text-lg'>08:00am - 10:00pm</p>
            </div>
            <div className='flex items-center justify-center mb-4'>
                <p className='text-lg'>Saturday - Sunday</p>
                <span></span>
                <p className='text-lg'>09:00am - 06:00pm</p>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-lg'>Emergency Services</p>
                <span></span>
                <p className='text-lg'>24 hours Open</p>
            </div>
         </div>
         
        </div>
    );
};

export default CheckUp;