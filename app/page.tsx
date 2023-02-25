import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen
    px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div className="flex text-center space-x-2">
            <div>
                <div className="flex flex-col
                 items-center justify-center md-5">
                  <SunIcon className="h-8 w-8 " />
                    <h2>Example</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Example Someting to me"</p>
                    <p className="infoText">"What is the diffrence between a dog and a cat"</p>
                    <p className="infoText">"what is the color of the sun"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col
                 items-center justify-center md-5">
                  <BoltIcon className="h-8 w-8 " />
                    <h2>Limititations</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Example Someting to me"</p>
                    <p className="infoText">"What is the diffrence between a dog and a cat"</p>
                    <p className="infoText">"what is the color of the sun"</p>
                </div>
            </div>

            <div>   
                <div className="flex flex-col
                 items-center justify-center md-5">
                  <ExclamationTriangleIcon className="h-8 w-8 " />
                    <h2>Capability</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Example Someting to me"</p>
                    <p className="infoText">"What is the diffrence between a dog and a cat"</p>
                    <p className="infoText">"what is the color of the sun"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage