const fullScreen = (id = '') => {
    const handler = () => {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        let targetDom = document.querySelector(id);
        if (!targetDom) return '';
        if (width > height) {
            targetDom.style.position = 'absolute';
            targetDom.style.width = `${width}px`;
            targetDom.style.height = `${height}px`;
            targetDom.style.left = `${0}px`;
            targetDom.style.top = `${0}px`;
            targetDom.style.transform = 'none';
            targetDom.style.transformOrigin = '50% 50%';
            targetDom.style.zIndex = 2000;
            return 'horizontal'
        } else {
            targetDom.style.position = 'absolute';
            targetDom.style.width = `${height}px`;
            targetDom.style.height = `${width}px`;
            targetDom.style.left = `${0 - (height - width) / 2}px`;
            targetDom.style.top = `${(height - width) / 2}px`;
            targetDom.style.transform = 'rotate(90deg)';
            targetDom.style.transformOrigin = '50% 50%';
            targetDom.style.zIndex = 2000;
            return 'vertical'
        }
    };
    return handler();
}

const closeFullScreen = (id = '') => {
    const handler = () => {
        let targetDom = document.querySelector(id);
        targetDom.style.position = '';
        targetDom.style.width = ''
        targetDom.style.height = ''
        targetDom.style.left = ''
        targetDom.style.top = ''
        targetDom.style.transform = ''
        targetDom.style.transformOrigin = ''
        targetDom.style.zIndex = ''
    };
    handler();
}


export {
    closeFullScreen,
    fullScreen
} 