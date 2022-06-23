function toggleDisplay() {
  var x = document.getElementById("recapitulatif");
  var y = document.getElementById("recapitulatif-toggle");
  if (x.style.display == "none") {
    x.style.display = "flex";
    y.style.marginRight = "0";
    y.style.marginLeft = "0";
  } else {
    x.style.display = "none";
    y.style.marginRight = "-15px";
    y.style.marginLeft = "-15px";
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  const range = document.getElementById('range')
  const rangeV = document.getElementById('rangeV')
  const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) )
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;


  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) )
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

  const range2 = document.getElementById('range2')
  const rangeV2 = document.getElementById('rangeV2')

      const
      newValue2 = Number( (range2.value - range2.min) * 100 / (range2.max - range2.min) )
      newPosition2 = 10 - (newValue2 * 0.2);
    rangeV2.innerHTML = `<span>${range2.value}</span>`;
    rangeV2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;

  setValue2 = ()=>{
    const
      newValue2 = Number( (range2.value - range2.min) * 100 / (range2.max - range2.min) )
      newPosition2 = 10 - (newValue2 * 0.2);
    rangeV2.innerHTML = `<span>${range2.value}</span>`;
    rangeV2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue2);
range2.addEventListener('input', setValue2);
});