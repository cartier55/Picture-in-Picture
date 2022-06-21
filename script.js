const vidEle = document.getElementById('vid')
const btn = document.getElementById('btn')

let selectMediaStream = async () =>{
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        vidEle.srcObject = mediaStream
        vidEle.onloadedmetadata = () => vidEle.play() 
    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener('click', async() => {
    btn.disabled = true
    await vidEle.requestPictureInPicture()
    btn.disabled = false
})
selectMediaStream()