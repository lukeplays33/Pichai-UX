import './Brain.js';

var net = new brain.NeuralNetwork();

net.train([{
    input: {
      r: 0.255,
      g: 0.255,
      b: 0.255
    },
    output: {
      white: 1
    }
  },
  {
    input: {
      r: 0.240,
      g: 0.240,
      b: 0.240
    },
    output: {
      white: 1
    }
  }
  ,
  {
    input: {
      r: 0.0,
      g: 0.1,
      b: 0.252
    },
    output: {
      blue: 1
    }
  },
  {
    input: {
      r: 0.56,
      g: 0.195,
      b: 0.228
    },
    output: {
      lightBlue: 1
    }
  },
  {
    input: {
      r: 0.46,
      g: 0.211,
      b: 0.197
    },
    output: {
      turquose: 1
    }
  }
]);

function findColorClass (r,g,b) {
    let i;

    let result = net.run({
        r: r,
        g: g,
        b: b
      });

      for(i of Object.keys(result)) {
        if(result[i] == Math.max(... Object.values(result))) {
            return i;
            break;
        }
      }
}

export { findColorClass };