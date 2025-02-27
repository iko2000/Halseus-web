'use client';
import FlowingMenu from '@/components/reactbits/collections';

const ProductsPagecontent = () => {

    const demoItems = [
        { link: '/products/ai-gpt', text: 'Customized ChatGPT', image: "https://images.pexels.com/photos/16245252/pexels-photo-16245252/free-photo-of-a-laptop-computer-with-the-word-chatgpt-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { link: '/products/ai-training', text: 'Train AI model', image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { link: '/products/ai-local', text: 'Local AI', image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg' },
    ];

    return (
        <>
            <div className="min-h-full mt-20 bg-white py-20">
                <div style={{ height: '600px', position: 'relative' }}>
                    <FlowingMenu items={demoItems} />
                </div>
            </div>
        </>
    );
};

export default ProductsPagecontent;