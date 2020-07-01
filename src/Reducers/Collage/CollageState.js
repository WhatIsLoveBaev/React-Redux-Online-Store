import videoIphone from './iphone_video.mp4'
import videoSamsung from './samsung_video.mp4'

const Collage = [
    {
        img: 'https://3dnews.ru/assets/external/illustrations/2019/01/26/981772/title.jpg',
        idGroup: 'cameras',
        product: 'nikon',
        label: 'Nikon',
        id: 'NikonPh156'
    },
    {
        video: videoSamsung,
        idGroup: 'phones',
        product: 'samsung',
        label: 'Samsung',
        id: 'PSam'
    },
    {
        video: videoIphone,
        idGroup: 'phones',
        product: 'apple',
        label: 'Iphone',
        id: 'APho'
    },
    {
        img: 'https://nanoreview.net/uploads/posts/2015-08/1438873427_8masgd.jpg',
        idGroup: 'smart_watch',
        product: 'samsung',
        label: 'Samsung',
        id: 'Swatch'
    }
]

export default function CollageState(state = Collage) {
    return state
}