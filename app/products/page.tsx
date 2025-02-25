'use client';

import FlowingMenu from '@/components/reactbits/collections';
import testimage from "../../public/assets/HALSEUS.png"

const ProductsPage = () => {

    const demoItems = [
        { link: '/products/ai-gpt', text: 'Customized ChatGPT', image: testimage },
        { link: '/products/ai-training', text: 'Train AI model on Specific Data', image: 'https://picsum.photos/600/400?random=2' },
        { link: '/products/ai-local', text: 'Local AI', image: 'https://picsum.photos/600/400?random=3' },
      ];
      
      
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 mt-10 to-gray-100 py-20">
        <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default ProductsPage;