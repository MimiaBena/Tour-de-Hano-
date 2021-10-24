window.onload = init;
function hanoi(n_disq, A, B, C){
   if(n_disq==1){document.write("Deplacer le disque "+n_disq+ " de "+A+ " à "+B+"<br>");
}
    else{
        hanoi(n_disq-1, A, C, B);
         hanoi(1, A, B, C);
         hanoi(n_disq-1, C, B, A)
    }
                     } 