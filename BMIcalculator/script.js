const form = document.querySelector('form')

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    const height =  parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
    const results  =  document.querySelector('#results')
    
    

    if(height == "" || height < 0 || isNaN(height)){
        results.innerHTML = `Enter valid height`
        results.style.backgroundColor = '#bde0fe'
    }else if(weight == "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Enter valid weight`
        results.style.backgroundColor = '#bde0fe'
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(1)
        console.log(bmi);
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi} You are underweight</span>`;
            results.style.backgroundColor = '#BE93D4';
        } else if (bmi <= 24.9) {
            results.innerHTML = `<span>${bmi} You are fit</span>`;
            results.style.backgroundColor = '#8ED081';
        } else {
            results.innerHTML = `<span>${bmi} You are overweight</span>`;
            results.style.backgroundColor = '#FF5E5B';
        }
         
    }

});