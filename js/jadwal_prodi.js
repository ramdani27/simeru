function myFunction(printAble) {
     var printContents = document.getElementById(printAble).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}