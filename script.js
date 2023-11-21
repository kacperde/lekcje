function sortowanie()
{

  let liczba1 = document.getElementById('liczba1').value;
  let liczba2 = document.getElementById('liczba2').value;
  let liczba3 = document.getElementById('liczba3').value;
  document.getElementById('liczba1.1').innerHTML = "Liczba 1 = " + liczba1;
  document.getElementById('liczba2.2').innerHTML = "Liczba 2 = " + liczba2;
  document.getElementById('liczba3.3').innerHTML = "Liczba 3 = " + liczba3;

  tab = [liczba1,liczba2,liczba3];

  wynik = tab.sort();

  document.getElementById('sort').innerHTML = "Posortowane liczby:" + wynik;
}
