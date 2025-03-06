/******************* 
 * Online_Mic *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'online_mic';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};

// Start code blocks for 'Before Experiment'
var mic;
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(mic_accessRoutineBegin());
flowScheduler.add(mic_accessRoutineEachFrame());
flowScheduler.add(mic_accessRoutineEnd());
flowScheduler.add(preludeRoutineBegin());
flowScheduler.add(preludeRoutineEachFrame());
flowScheduler.add(preludeRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(enderRoutineBegin());
flowScheduler.add(enderRoutineEachFrame());
flowScheduler.add(enderRoutineEnd());
flowScheduler.add(never_ending_routineRoutineBegin());
flowScheduler.add(never_ending_routineRoutineEachFrame());
flowScheduler.add(never_ending_routineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimlist.csv', 'path': 'stimlist.csv'},
    {'name': 'tone.wav', 'path': 'tone.wav'},
    {'name': 'recording.png', 'path': 'recording.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var mic_accessClock;
var mic_access_key_resp;
var mic_perms_text;
var preludeClock;
var prelude_text;
var prelude_key_resp;
var trialClock;
var mic;
var trial_key_resp;
var stim_text;
var recording_text;
var recording_tone;
var recording_image;
var record_wait_text;
var enderClock;
var ender_key_resp;
var ender_text;
var never_ending_routineClock;
var never_ending_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "mic_access"
  mic_accessClock = new util.Clock();
  mic_access_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mic_perms_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'mic_perms_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "prelude"
  preludeClock = new util.Clock();
  prelude_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prelude_text',
    text: 'Are you ready to begin?\n\nPress space to get started.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  prelude_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  trial_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  stim_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  recording_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recording_text',
    text: 'Recording',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.47)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  recording_tone = new sound.Sound({
      win: psychoJS.window,
      value: 'tone.wav',
      secs: (- 1),
      });
  recording_tone.setVolume(1.0);
  recording_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'recording_image', units : undefined, 
    image : 'recording.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.4)], 
    draggable: false,
    size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  record_wait_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'record_wait_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [2, 2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ender"
  enderClock = new util.Clock();
  ender_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ender_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ender_text',
    text: 'Press the space bar to save your results.\n\nPlease wait until you see the "Thank you for your patience" message before closing your browser.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "never_ending_routine"
  never_ending_routineClock = new util.Clock();
  never_ending_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'never_ending_text',
    text: 'Please wait while we save your result...',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var mic_accessMaxDurationReached;
var _mic_access_key_resp_allKeys;
var mic_perms_text_string;
var mic_accessMaxDuration;
var mic_accessComponents;
function mic_accessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mic_access' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    mic_accessClock.reset();
    routineTimer.reset();
    mic_accessMaxDurationReached = false;
    // update component parameters for each repeat
    mic_access_key_resp.keys = undefined;
    mic_access_key_resp.rt = undefined;
    _mic_access_key_resp_allKeys = [];
    mic_perms_text_string = "Please grant permission to access your microphone if asked.\n\nThen, press space to continue.";
    
    // If browser supports getUserMedia(), request 
    // microphone permissions
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia supported.");
      navigator.mediaDevices
        .getUserMedia(
          // constraints - only audio needed for this app
          {
            audio: true,
            video: false,
          }
        )
    
        // Success callback
        .then((stream) => {
            mic_perms_text_string = "Please grant permission to access your microphone if asked.\n\nThen, press space to continue.";
            console.log("ACTIVE?");
            console.log(stream.active);
                if (stream.active) {
                    continueRoutine = false;
                }
            })
    
        // Error callback
        .catch((err) => {
          console.error(`The following getUserMedia error occurred: ${err}`);
          mic_perms_text_string = "Microphone access has been denied. Please refresh the page and grant permission to access your microphone.";
        });
    } else {
      console.log("getUserMedia not supported on your browser!");
      mic_perms_text_string = "Sorry, it seems your browser isn't supported.  Please try a different browser.";
    }
    
    psychoJS.experiment.addData('mic_access.started', globalClock.getTime());
    mic_accessMaxDuration = null
    // keep track of which components have finished
    mic_accessComponents = [];
    mic_accessComponents.push(mic_access_key_resp);
    mic_accessComponents.push(mic_perms_text);
    
    for (const thisComponent of mic_accessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mic_accessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mic_access' ---
    // get current time
    t = mic_accessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mic_access_key_resp* updates
    if (t >= 0.0 && mic_access_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mic_access_key_resp.tStart = t;  // (not accounting for frame time here)
      mic_access_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { mic_access_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { mic_access_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { mic_access_key_resp.clearEvents(); });
    }
    
    if (mic_access_key_resp.status === PsychoJS.Status.STARTED && Boolean(0)) {
      mic_access_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (mic_access_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = mic_access_key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _mic_access_key_resp_allKeys = _mic_access_key_resp_allKeys.concat(theseKeys);
      if (_mic_access_key_resp_allKeys.length > 0) {
        mic_access_key_resp.keys = _mic_access_key_resp_allKeys[_mic_access_key_resp_allKeys.length - 1].name;  // just the last key pressed
        mic_access_key_resp.rt = _mic_access_key_resp_allKeys[_mic_access_key_resp_allKeys.length - 1].rt;
        mic_access_key_resp.duration = _mic_access_key_resp_allKeys[_mic_access_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    if (mic_perms_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      mic_perms_text.setText(mic_perms_text_string, false);
    }
    
    // *mic_perms_text* updates
    if (t >= 0.0 && mic_perms_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mic_perms_text.tStart = t;  // (not accounting for frame time here)
      mic_perms_text.frameNStart = frameN;  // exact frame index
      
      mic_perms_text.setAutoDraw(true);
    }
    
    if (mic_perms_text.status === PsychoJS.Status.STARTED && Boolean(0)) {
      mic_perms_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mic_accessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mic_accessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mic_access' ---
    for (const thisComponent of mic_accessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mic_access.stopped', globalClock.getTime());
    mic_access_key_resp.stop();
    // the Routine "mic_access" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preludeMaxDurationReached;
var _prelude_key_resp_allKeys;
var preludeMaxDuration;
var preludeComponents;
function preludeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prelude' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    preludeClock.reset();
    routineTimer.reset();
    preludeMaxDurationReached = false;
    // update component parameters for each repeat
    prelude_key_resp.keys = undefined;
    prelude_key_resp.rt = undefined;
    _prelude_key_resp_allKeys = [];
    psychoJS.experiment.addData('prelude.started', globalClock.getTime());
    preludeMaxDuration = null
    // keep track of which components have finished
    preludeComponents = [];
    preludeComponents.push(prelude_text);
    preludeComponents.push(prelude_key_resp);
    
    for (const thisComponent of preludeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function preludeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prelude' ---
    // get current time
    t = preludeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prelude_text* updates
    if (t >= 0.0 && prelude_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prelude_text.tStart = t;  // (not accounting for frame time here)
      prelude_text.frameNStart = frameN;  // exact frame index
      
      prelude_text.setAutoDraw(true);
    }
    
    if (prelude_text.status === PsychoJS.Status.STARTED && Boolean(0)) {
      prelude_text.setAutoDraw(false);
    }
    
    
    // *prelude_key_resp* updates
    if (t >= 0.0 && prelude_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prelude_key_resp.tStart = t;  // (not accounting for frame time here)
      prelude_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prelude_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prelude_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prelude_key_resp.clearEvents(); });
    }
    
    if (prelude_key_resp.status === PsychoJS.Status.STARTED && Boolean(0)) {
      prelude_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (prelude_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prelude_key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _prelude_key_resp_allKeys = _prelude_key_resp_allKeys.concat(theseKeys);
      if (_prelude_key_resp_allKeys.length > 0) {
        prelude_key_resp.keys = _prelude_key_resp_allKeys[_prelude_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prelude_key_resp.rt = _prelude_key_resp_allKeys[_prelude_key_resp_allKeys.length - 1].rt;
        prelude_key_resp.duration = _prelude_key_resp_allKeys[_prelude_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preludeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preludeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prelude' ---
    for (const thisComponent of preludeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prelude.stopped', globalClock.getTime());
    prelude_key_resp.stop();
    // the Routine "prelude" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimlist.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _trial_key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    trial_key_resp.keys = undefined;
    trial_key_resp.rt = undefined;
    _trial_key_resp_allKeys = [];
    stim_text.setText(item_letter);
    recording_tone.setVolume(1.0);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_key_resp);
    trialComponents.push(stim_text);
    trialComponents.push(recording_text);
    trialComponents.push(recording_tone);
    trialComponents.push(recording_image);
    trialComponents.push(record_wait_text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *trial_key_resp* updates
    if (t >= 0.0 && trial_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_key_resp.tStart = t;  // (not accounting for frame time here)
      trial_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_key_resp.clearEvents(); });
    }
    
    if (trial_key_resp.status === PsychoJS.Status.STARTED && Boolean(0)) {
      trial_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (trial_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _trial_key_resp_allKeys = _trial_key_resp_allKeys.concat(theseKeys);
      if (_trial_key_resp_allKeys.length > 0) {
        trial_key_resp.keys = _trial_key_resp_allKeys[_trial_key_resp_allKeys.length - 1].name;  // just the last key pressed
        trial_key_resp.rt = _trial_key_resp_allKeys[_trial_key_resp_allKeys.length - 1].rt;
        trial_key_resp.duration = _trial_key_resp_allKeys[_trial_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *stim_text* updates
    if (t >= 0.0 && stim_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_text.tStart = t;  // (not accounting for frame time here)
      stim_text.frameNStart = frameN;  // exact frame index
      
      stim_text.setAutoDraw(true);
    }
    
    if (stim_text.status === PsychoJS.Status.STARTED && Boolean(0)) {
      stim_text.setAutoDraw(false);
    }
    
    
    // *recording_text* updates
    if ((mic.status == STARTED && record_wait_text.status == FINISHED) && recording_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recording_text.tStart = t;  // (not accounting for frame time here)
      recording_text.frameNStart = frameN;  // exact frame index
      
      recording_text.setAutoDraw(true);
    }
    
    if (recording_text.status === PsychoJS.Status.STARTED && Boolean((mic.status != STARTED))) {
      recording_text.setAutoDraw(false);
    }
    
    // start/stop recording_tone
    if ((mic.status == STARTED && record_wait_text.status == FINISHED) && recording_tone.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recording_tone.tStart = t;  // (not accounting for frame time here)
      recording_tone.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ recording_tone.play(); });  // screen flip
      recording_tone.status = PsychoJS.Status.STARTED;
    }
    if (t >= (recording_tone.getDuration() + recording_tone.tStart)     && recording_tone.status === PsychoJS.Status.STARTED) {
      recording_tone.stop();  // stop the sound (if longer than duration)
      recording_tone.status = PsychoJS.Status.FINISHED;
    }
    
    // *recording_image* updates
    if ((mic.status == STARTED && record_wait_text.status == FINISHED) && recording_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recording_image.tStart = t;  // (not accounting for frame time here)
      recording_image.frameNStart = frameN;  // exact frame index
      
      recording_image.setAutoDraw(true);
    }
    
    if (recording_image.status === PsychoJS.Status.STARTED && Boolean((mic.status != STARTED))) {
      recording_image.setAutoDraw(false);
    }
    
    
    // *record_wait_text* updates
    if (t >= 0.0 && record_wait_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      record_wait_text.tStart = t;  // (not accounting for frame time here)
      record_wait_text.frameNStart = frameN;  // exact frame index
      
      record_wait_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (record_wait_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      record_wait_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var thisFilename;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    "subj_" + expInfo["participant"] + "_" +
                    "item_" + String(item_num).padStart(2, 0) + // zero-pad item_num to two digits
                    "-" + item_letter +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(trial_key_resp.corr, level);
    }
    psychoJS.experiment.addData('trial_key_resp.keys', trial_key_resp.keys);
    if (typeof trial_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_key_resp.rt', trial_key_resp.rt);
        psychoJS.experiment.addData('trial_key_resp.duration', trial_key_resp.duration);
        routineTimer.reset();
        }
    
    trial_key_resp.stop();
    recording_tone.stop();  // ensure sound has stopped at end of Routine
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var enderMaxDurationReached;
var _ender_key_resp_allKeys;
var enderMaxDuration;
var enderComponents;
function enderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ender' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    enderClock.reset();
    routineTimer.reset();
    enderMaxDurationReached = false;
    // update component parameters for each repeat
    ender_key_resp.keys = undefined;
    ender_key_resp.rt = undefined;
    _ender_key_resp_allKeys = [];
    psychoJS.experiment.addData('ender.started', globalClock.getTime());
    enderMaxDuration = null
    // keep track of which components have finished
    enderComponents = [];
    enderComponents.push(ender_key_resp);
    enderComponents.push(ender_text);
    
    for (const thisComponent of enderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function enderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ender' ---
    // get current time
    t = enderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ender_key_resp* updates
    if (t >= 0.0 && ender_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ender_key_resp.tStart = t;  // (not accounting for frame time here)
      ender_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ender_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ender_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ender_key_resp.clearEvents(); });
    }
    
    if (ender_key_resp.status === PsychoJS.Status.STARTED && Boolean(0)) {
      ender_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (ender_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ender_key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _ender_key_resp_allKeys = _ender_key_resp_allKeys.concat(theseKeys);
      if (_ender_key_resp_allKeys.length > 0) {
        ender_key_resp.keys = _ender_key_resp_allKeys[_ender_key_resp_allKeys.length - 1].name;  // just the last key pressed
        ender_key_resp.rt = _ender_key_resp_allKeys[_ender_key_resp_allKeys.length - 1].rt;
        ender_key_resp.duration = _ender_key_resp_allKeys[_ender_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ender_text* updates
    if (t >= 0.0 && ender_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ender_text.tStart = t;  // (not accounting for frame time here)
      ender_text.frameNStart = frameN;  // exact frame index
      
      ender_text.setAutoDraw(true);
    }
    
    if (ender_text.status === PsychoJS.Status.STARTED && Boolean(0)) {
      ender_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of enderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ender' ---
    for (const thisComponent of enderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ender.stopped', globalClock.getTime());
    ender_key_resp.stop();
    // the Routine "ender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var never_ending_routineMaxDurationReached;
var never_ending_routineMaxDuration;
var never_ending_routineComponents;
function never_ending_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'never_ending_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    never_ending_routineClock.reset();
    routineTimer.reset();
    never_ending_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to brower
    psychoJS._saveResults = 0;
     
    // Generate filename for results
    let filename = psychoJS._experiment._trialsData; 
     
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
       return Object.values(it).toString()
       }).join('/n')
     
    // Send data to OSF via DataPipe
    consloe.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: '*/*',
       }, 
       body: JSON.stringify({
           experimentID: 'eAvRd4zGgrd1', // UPDATE WITH YOUR DATAPIPE EXPERIMENT ID
           filename: filename,
           data: data
       }),
    }).then(response => response.json()).then(data => {
       // Log response and force experiment end
       console.log(data);
       quitPsychoJS();
    })
    psychoJS.experiment.addData('never_ending_routine.started', globalClock.getTime());
    never_ending_routineMaxDuration = null
    // keep track of which components have finished
    never_ending_routineComponents = [];
    never_ending_routineComponents.push(never_ending_text);
    
    for (const thisComponent of never_ending_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function never_ending_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'never_ending_routine' ---
    // get current time
    t = never_ending_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *never_ending_text* updates
    if (t >= 0.0 && never_ending_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      never_ending_text.tStart = t;  // (not accounting for frame time here)
      never_ending_text.frameNStart = frameN;  // exact frame index
      
      never_ending_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of never_ending_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function never_ending_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'never_ending_routine' ---
    for (const thisComponent of never_ending_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('never_ending_routine.stopped', globalClock.getTime());
    // the Routine "never_ending_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
