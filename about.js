    
    function obtainInformation(step) {
        return new Promise ( (resolve, reject) => {
            let instruction = mashaIntro[step];
          setTimeout(() => {
            if (!mashaIntro[step]) reject("Instructions not found.")
            else resolve(instruction);
           }, 1000); 
          
        })
      }
       
      async function getInformation() {
        const step0 = await obtainInformation(0);
        document.querySelector("#mashaIntro").innerHTML += `<p>${step0}</p>`
        const step1 = await obtainInformation(1);
        document.querySelector("#mashaIntro").innerHTML += `<p>${step1}</p>` 
        const step2 = await obtainInformation(2);
        document.querySelector("#mashaIntro").innerHTML += `<p>${step2}</p>`
        const step3 = await obtainInformation(3);
        document.querySelector("#mashaIntro").innerHTML += `<p>${step3}</p>`
        document.querySelector("#babyMasha").removeAttribute("hidden");
        document.querySelector("#mashaVicky").removeAttribute("hidden");
        document.querySelector("#mashaGordo").removeAttribute("hidden");
        document.querySelector("#mashaBox").removeAttribute("hidden");
      }
       
      getInformation();

