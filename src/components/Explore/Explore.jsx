import React from 'react';

const Explore = () => {
    return (
        <div className='bg-linear-to-r from-blue-500 to-purple-500 text-white text-center py-16'>
            <h2 className='text-4xl font-bold pb-3'>Ready to Transform Your Workflow?</h2>
            <p className='mb-6'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            
            <div className='flex justify-center items-center gap-4'>
                <button className="btn rounded-4xl text-purple-600 border-none">Explore Products</button>
                <button className="btn bg-transparent border-2 rounded-4xl border-gray-200 text-white hover:bg-white hover:text-purple-600 transition-colors">View Pricing</button>
            </div>
            
            <p className='mt-4 text-gray-100 text-sm'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Explore;