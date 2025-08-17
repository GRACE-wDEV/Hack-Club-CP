import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  const h1Ref = useRef();
  useGSAP(()=>{
    const hello = new SplitText(h1Ref.current, {type: 'chars'});

      gsap.from(hello.chars, {
        yPercent: 50,
        opacity: 0,
        duration: 1.8,
        stagger: .03,
        fontSize: '100px',
        ease: 'expo.inOut'
      })
  }, [])
  return (
    <div>
      <h1 ref={h1Ref} className='text-[15rem] flex-center h-dvh w-full text-indigo-300 font-modern-negra font-bold underline'>Hello World</h1>
    </div>
  )
}

export default App
