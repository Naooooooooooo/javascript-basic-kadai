let value = 0;
let num = 0;

const Num_double =(num) => {
   value = num**2;
   return value;
}

for(num = 0; num < 15 ; num++){
    Num_double(num);
    console.log(Num_double(num));
}

