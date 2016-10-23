//alert('hello');
import {startRecording, stopRecording} from './renderer';
import {remote} from 'electron';

window.onload = function() {
    let counts = remote.getGlobal('counts');
    counts.recordingNumber++;

    startRecording(counts.recordingNumber);

    var w: any = window;
    w['__stopRecording'] = stopRecording;
    //setTimeout(function() { stopRecording(); }, 15000);

};

window.onunload = function() {
    stopRecording();
};