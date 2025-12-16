const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

function DogLeftEye() {
    return <div class='absolute w-40 h-40 bg-white top-5 left-5'> <div class='absolute w-20 h-20 bg-black left-10 top-10 rounded-full'></div></div>
}

function DogRightEye() {
    return <div class='absolute w-40 h-40 bg-white top-5 right-5'> <div class='absolute w-20 h-20 bg-black left-10 top-10 rounded-full'></div></div>
}

function DogNose() {
    return <div class='absolute w-50 h-30 bg-black left-25 top-50 absolute'>
        <div class='absolute w-10 h-10 bg-gray-300 top-10 left-10 rounded-full'></div>
        <div class='absolute w-10 h-10 bg-gray-300 top-10 right-10 rounded-full'></div>
    </div>
}

function DogMouth() {
    return <div class='absolute w-30 h-10 bg-black left-35 bottom-5'></div>
}

function DogLeftEar() {
    return <div class='absolute w-10 h-40 bg-gray-300 -left-10 top-10'></div>
}

function DogRightEar() {
    return <div class='absolute w-10 h-40 bg-gray-300 -right-10 top-10'></div>
}

function DogHead() {
    return <div class='w-100 h-100 bg-white absolute left-100 top-100'>
        <DogLeftEye />
        <DogRightEye />

        <DogNose />

        <DogMouth />

        <DogLeftEar />
        <DogRightEar />
    </div>
}

function DoorHouse() {
    return <div class='absolute w-150 h-150 bg-white top-150 left-250'>
        <div class='absolute w-10 h-10 bg-black top-80 left-50 rounded-full'></div>
        <div class='absolute w-10 h-10 bg-black top-80 right-50 rounded-full'></div>
    </div>
}

function WindowTopLeft() {
    return <div class='absolute w-60 h-90 bg-[aqua] top-30 left-20'></div>
}

function WindowTopRigt() {
    return <div class='absolute w-60 h-90 bg-[aqua] top-30 right-20'></div>
}

function WindowBottomLeft() {
    return <div class='absolute w-60 h-90 bg-[aqua] top-180 left-20'></div>
}


function WindowBottomRigt() {
    return <div class='absolute w-60 h-90 bg-[aqua] top-180 right-20'></div>
}

function FirePlace() {
    return <div class='absolute w-60 h-90 bg-gray-300 -top-90 right-20'></div>
}

function FireFlame() {
    return <div class='absolute w-60 h-90 bg-red-500 -top-180 right-20 rounded'></div>
}

function FireFlameCenter() {
    return <div class='absolute w-30 h-90 bg-orange-500 -top-180 right-35 rounded-t'></div>
}

function LineLeft() {
    return <div class='absolute w-15 h-300 bg-blue-600 left-120 rounded'></div>
}

function LineRight() {
    return <div class='absolute w-15 h-300 bg-orange-500 left-180 rounded'></div>
}

function House() {
    return <div class='absolute w-600 h-300 bg-blue-100 top-500'>
        <DoorHouse />

        <WindowTopLeft />
        <WindowTopRigt />

        <WindowBottomLeft />
        <WindowBottomRigt />

        <FirePlace />
        <FireFlame />
        <FireFlameCenter />

        <LineLeft />
        <LineRight />
    </div>
}

function CoffeContainer() {
    return <div class='absolute w-30 h-40 -right-25 top-15 rounded-full border-[20px] border-white'></div>
}

function CoffeColor() {
    return <div class='absolute w-80 h-10 bg-[brown] top-0 left-10 rounded-t'></div>
}

function CupOfCoffe() {
    return <div class='absolute w-100 h-70 bg-white rounded-b left-500 top-100'>
        <CoffeContainer />
        <CoffeColor />
    </div>
}

function TreeLeaves() {
    return <div class='absolute w-100 h-100 bg-green-500 rounded-full -top-60 -left-35'></div>
}


function Tree() {
    return <div class='absolute w-30 h-100 bg-[brown] top-50 left-350'>
        <TreeLeaves />
    </div>
}

function RobotFace() {
    return <div class='absolute w-100 h-80 bg-gray-300 rounded left-10 -top-80'>
        <div class='absolute w-20 h-20 bg-black rounded-full top-25 left-20'></div>
        <div class='absolute w-20 h-20 bg-black rounded-full top-25 right-20'></div>
        <div class='absolute w-6 h-25 bg-[silver] -top-25 left-47'></div>
        <div class='absolute w-12 h-12 bg-red-500 rounded-full -top-35 left-43'></div>
    </div>
}

function RobotBody() {
    return <div class='absolute w-120 h-130 bg-gray-300 rounded-r'>
        <div class='absolute w-25 h-70 bg-gray-600 top-20 -left-25'></div>
        <div class='absolute w-25 h-70 bg-gray-600 top-20 -right-25'></div>
        <div class='absolute w-25 h-60 bg-gray-600 -bottom-60 left-25'></div>
        <div class='absolute w-25 h-60 bg-gray-600 -bottom-60 right-25'></div>
    </div>
}

function Robot() {
    return <div class='absolute w-140 h-230 left-700 top-300'>
        <RobotFace />
        <RobotBody />
    </div>
}

root.render([<DogHead />, <House />, <CupOfCoffe />, <Tree />, <Robot />])