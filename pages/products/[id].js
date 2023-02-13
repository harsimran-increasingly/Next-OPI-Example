import React, { useEffect, useState } from 'react'
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}
function ID() {

  const [counter, setCounter] = useState(1)
  let increasinglyObject = null

  async function displayIncreasingly() {
    // Call our script asynchronously
    const res = await loadScript('https://www.increasingly.co/Implementation/o9I0uK/js/increasingly.js')
    // If it fails we can stop here 
    if (!res) {
      alert('Increasingly Failed To Load!')
      return
    }

    // This is sample payload object where we can pass productId & other information which we require us to identify the product details
    const options = {
      productIds: ["99350039241"],
      source: 'increasingly-root'
    }

    // using Increasingly function you can create new instance of our object and pass the payload
    increasinglyObject = new Increasingly(options)

    // We can initialize our app using initialize function on our instance
    increasinglyObject.initialize()
    // After initialization we will process the details and display bundles
  }

  useEffect(() => {
    // Load Once Using Your Custom Function
    displayIncreasingly()
  }, [])
  return (
    <main>
      <nav>Navbar</nav>
      <div className="container">
        <div className='grid-children'>OPI Nailpolish
          <div className='increament'>
            <button onClick={() => setCounter(counter + 1)}>Add</button><p>{counter}</p><button onClick={() => setCounter(counter - 1)}>Remove</button>
          </div>
        </div>
        <div className='grid-children'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dignissimos? Culpa quos, quia saepe ipsum veritatis facere, totam obcaecati quidem tenetur sit error eaque eligendi quis animi, eius laudantium aperiam.
          Iste libero repellendus ad voluptatibus! Eum, earum impedit adipisci architecto perferendis minima dolor ut harum quasi reiciendis nesciunt iste! Quo possimus praesentium sint hic. Eaque iure adipisci error aliquid itaque.
          Explicabo fuga deleniti corporis reprehenderit, placeat sit accusantium aperiam voluptatum pariatur perspiciatis natus dicta dolor quos! Quidem excepturi voluptate consequatur sunt cupiditate dicta, nisi dignissimos dolores itaque minus provident repudiandae.
          Eius asperiores sunt deserunt quo ab harum consequatur repellendus. Voluptates nihil aspernatur earum est quae quos sapiente magnam at repudiandae hic labore repellendus nam repellat eaque officia, exercitationem assumenda delectus.
          Maxime molestias, nostrum recuatur illum ab architecto vitae doloribus non, dolorem sint voluptatum quo ut fuga quis natus voluptas.
          Quibusdam quod qui fuga incidunt tempora quae hic cum accusamus rerum. Earum nesciunt, asperiores, veritatis temporibus eum unde voluptas explicabo qui eius, fuga labore eos a odio. Numquam, nam doloremque.</div>
      </div>
      <div id="increasingly_root"></div>
      {/* <button onClick={() => displayIncreasingly()}>Re-Render INC</button> */}
      <button onClick={() => increasinglyObject.destroy()}>Destroy Instance</button>
      <footer>footer</footer>
    </main>
  )
}

export default ID