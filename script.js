function sortowanie()
{
    let liczba1 = parseFloat(document.getElementById('liczba1').value);
    let liczba2 = parseFloat(document.getElementById('liczba2').value);
    let liczba3 = parseFloat(document.getElementById('liczba3').value);
    console.log(isNaN(liczba1));
    console.log(isNaN(liczba2));
    console.log(isNaN(liczba3));
    if(isNaN(liczba1) || isNaN(liczba2) || isNaN(liczba3))
    {
        document.getElementById('liczba1.1').innerHTML = "Nie wszystkie wartości to liczby!";   
    }
    else
    {
        document.getElementById('liczba1.1').innerHTML = "Liczba 1 = " + liczba1;
        document.getElementById('liczba2.2').innerHTML = "Liczba 2 = " + liczba2;
        document.getElementById('liczba3.3').innerHTML = "Liczba 3 = " + liczba3;
    
        tab = [liczba1,liczba2,liczba3];
        wynik = tab.sort(function(a, b){return a-b});
    
        document.getElementById('sort').innerHTML = "Posortowane liczby: " + wynik;
    }
}
