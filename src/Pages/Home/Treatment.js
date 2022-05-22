import React from 'react';
import treatmentimg from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure style={{ width: '458px', height: '676px' }}>
                <img src={treatmentimg} />

            </figure>
            <div class="card-body ">
                <div className='mt-10 ml-10'>
                    <h2 class="card-title font-bold text-center">Exceptional Dental <br /> Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at its <br /> layout. The point of using Lorem Ipsumis that it has a <br /> more-or-less normal distribution of letters,as opposed to using <br /> 'Content here, content here', making it look like readable <br /> English. Many desktop publishing packages and web page</p>
                </div>
                <div class="card-actions ml-10 mt-10">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;