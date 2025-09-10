function ggTf(z1, z2) {
  let ggT = 1;
  for (let i = 1; i <= z2; i++) {
    if (z1 % i === 0 && z2 % i === 0) {
      ggT = i;
    }
  }
  console.log(`der ggt von ${z1} und ${z2} ist ${ggT}`);
}

ggTf(48, 12);
ggTf(193124, 23123);
ggTf(923, 345);
ggTf(456, 123);
ggTf(182, 44);
ggTf(78, 34);
ggTf(1543, 574);
