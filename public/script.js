const socket = io('/');
const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
});
const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true 
}).then(stream => {
    console.log('Got media stream:', stream);
    addVideoStream(myVideo, stream);

    myPeer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            console.log('Received user video stream:', userVideoStream);
            addVideoStream(video, userVideoStream);
        });
    });

    socket.on('user-connected', userId => {
        console.log('User connected:', userId);
        connectToNewUser(userId, stream);
    });
});

myPeer.on('open', id => {
    console.log('Peer ID:', id);
    socket.emit('join-room', ROOM_ID, id);
});

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
        console.log('Connecting to new user stream:', userVideoStream);
        addVideoStream(video, userVideoStream);
    });
    call.on('close', () => {
        video.remove();
    });
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
    console.log('Added video stream to grid:', video);
}
