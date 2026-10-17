/* Физика анимаций: всё считается от времени t, без состояния между кадрами.
   S(t, w, z)           переходная характеристика пружины (0 → 1), w жёсткость (рад/с), z демпфирование.
   track(t, keys, w, z) значение с несколькими сменами цели: сумма пружин, по одной на смену.
                        keys = [[t0, v0], [t1, v1], ...], первое значение стартовое.
   Пример: PH.track(t, [[0, 0], [1.2, 300], [2.5, 120]], 14, 0.9)
           на 1,2 с уводит элемент на 300 px, на 2,5 с возвращает к 120. */
(function () {
  function S(t, w, z) {
    if (t <= 0) return 0;
    w = w || 14; z = z == null ? 0.8 : z;
    if (z >= 1) { return 1 - Math.exp(-w * t) * (1 + w * t); }
    const wd = w * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
  }
  function track(t, keys, w, z) {
    let v = keys[0][1];
    for (let i = 1; i < keys.length; i++) v += (keys[i][1] - keys[i - 1][1]) * S(t - keys[i][0], w, z);
    return v;
  }
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, k) => a + (b - a) * k;
  const ease = {
    outExpo: k => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k)),
    inOut: k => (k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2)
  };
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
  window.PH = { S, track, clamp, lerp, ease, seg };
})();
