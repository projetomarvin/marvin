const check = require("./check.js");

const exercicios = {
    etapa01: [
      {
        file: "etapa01/ex00.js",
        tests: [
          {
            output: "Marvin"
          }
        ]
      },
      {
        file: "etapa01/ex01.js",
        tests: [
          {
            output: "Marvin",
            result: "Marvin"
          }
        ]
      },
      {
        file: "etapa01/ex02.js",
        tests: [
          {
            output: "Marvin",
            param: "Marvin"
          }
        ]
      },
      {
        file: "etapa01/ex03.js",
        tests: [
          {
            param: "Zaphod",
            result: "Meu nome é Zaphod"
          },
          {
            param: "Marvin",
            result: "Meu nome é Marvin"
          }
        ]
      },
      {
        file: "etapa01/ex04.js",
        tests: [
          {
            param: ["Alpha", 1233],
            output: "Alpha\n1233"
          }
        ]
      },
      {
        file: "etapa01/ex05.js",
        tests: [
          {
            param: ["Zoho", 19, "futebol"],
            output: "Me chamo Zoho, tenho 19 anos e gosto de futebol"
          }
        ]
      }
    ],
    etapa02: [
      {
        file: "etapa02/ex00.js",
        tests: [
          {
            param: "abcdefg",
            result: "abc"
          },
          {
            param: "120",
            result: "120"
          },
          {
            param: "   dfsfsdsdf",
            result: "   "
          }
        ]
      },
      {
        file: "etapa02/ex01.js",
        tests: [
          {
            param: "abcdefg",
            result: "efg"
          },
          {
            param: "132",
            result: "132"
          },
          {
            param: "dfsfsdsdf   ",
            result: "   "
          }
        ]
      },
      {
        file: "etapa02/ex02.js",
        tests: [
          {
            param: "abcdefg",
            result: "f"
          },
          {
            param: "12",
            result: "1"
          },
          {
            param: "  ",
            result: " "
          }
        ]
      },
      {
        file: "etapa02/ex03.js",
        tests: [
          {
            param: "abcdefg",
            result: "ABCDEFG"
          },
          {
            param: "12",
            result: "12"
          },
          {
            param: "   dfsfsdsdf",
            result: "   DFSFSDSDF"
          }
        ]
      },
      {
        file: "etapa02/ex04.js",
        tests: [
          {
            param: "abcdefg",
            result: "ABCdefg"
          },
          {
            param: "120",
            result: "120"
          },
          {
            param: "  adfsfsdsdf",
            result: "  Adfsfsdsdf"
          }
        ]
      },
      {
        file: "etapa02/ex05.js",
        tests: [
          {
            param: "ABCD",
            output: "a"
          },
          {
            param: "12",
            output: "1"
          },
          {
            param: "Dfsfsdsdf",
            output: "d"
          }
        ]
      }
    ]
  };
  // {
  //   etapa03: [
  //     {
  //       file: "etapa03/ex00.js",
  //       tests: [
  //         {
  //           result: /^0\.[0-9]{12,20}\w$/i
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex01.js",
  //       tests: [
  //         {
  //           result: /^1[0-9]|20$/i
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex02.js",
  //       tests: [
  //         {
  //           param: 12,
  //           result: true
  //         },
  //         {
  //           param: null,
  //           result: false
  //         },
  //         {
  //           param: "12.32.32",
  //           result: false
  //         },
  //         {
  //           param: Math.random(),
  //           result: false
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex03.js",
  //       tests: [
  //         {
  //           param: [1, 4, 9],
  //           result: 14
  //         },
  //         {
  //           param: [0, 0, 0],
  //           result: 0
  //         },
  //         {
  //           param: [-1024, 0, 2048],
  //           result: 1024
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex04.js",
  //       tests: [
  //         {
  //           param: [4, 1],
  //           result: 3
  //         },
  //         {
  //           param: [0, 0],
  //           result: 0
  //         },
  //         {
  //           param: [0, 1024],
  //           result: -1024
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex05.js",
  //       tests: [
  //         {
  //           param: [4, 244],
  //           result: 4 / 244
  //         },
  //         {
  //           param: [0, 7],
  //           result: 0
  //         },
  //         {
  //           param: [-2048, 1024],
  //           result: -2
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex06.js",
  //       tests: [
  //         {
  //           param: [4, 4, 4, 4],
  //           result: 256
  //         },
  //         {
  //           param: [0, 0, 0, 0],
  //           result: 0
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex07.js",
  //       tests: [
  //         {
  //           param: [44, 4],
  //           result: "444"
  //         },
  //         {
  //           param: [0, 0],
  //           result: "00"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa03/ex08.js",
  //       tests: [
  //         {
  //           param: 4,
  //           result: 2
  //         },
  //         {
  //           param: 81,
  //           result: 9
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   etapa04: [
  //     {
  //       file: "etapa04/ex00.js",
  //       tests: [
  //         {
  //           param: "A",
  //           result: "vogal"
  //         },
  //         {
  //           param: "a",
  //           result: "vogal"
  //         },
  //         {
  //           param: "C",
  //           result: "consoante"
  //         },
  //         {
  //           param: "java",
  //           result: "inválido"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex01.js",
  //       tests: [
  //         {
  //           param: "A",
  //           result: undefined
  //         },
  //         {
  //           param: "a",
  //           result: undefined
  //         },
  //         {
  //           param: "C",
  //           result: true
  //         },
  //         {
  //           param: "j",
  //           result: true
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex02.js",
  //       tests: [
  //         {
  //           param: 0,
  //           result: "par"
  //         },
  //         {
  //           param: 1,
  //           result: "ímpar"
  //         },
  //         {
  //           param: -42,
  //           result: "par"
  //         },
  //         {
  //           param: 54456.56,
  //           result: "ímpar"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex03.js",
  //       tests: [
  //         {
  //           param: 0,
  //           result: "par"
  //         },
  //         {
  //           param: 1,
  //           result: "ímpar"
  //         },
  //         {
  //           param: -42,
  //           result: "par"
  //         },
  //         {
  //           param: 54456.56,
  //           result: "ímpar"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex04.js",
  //       tests: [
  //         {
  //           param: 0,
  //           result: true
  //         },
  //         {
  //           param: 1,
  //           result: false
  //         },
  //         {
  //           param: -42,
  //           result: true
  //         },
  //         {
  //           param: 544565,
  //           result: false
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex05.js",
  //       tests: [
  //         {
  //           param: "dsa",
  //           result: "não"
  //         },
  //         {
  //           param: "aaa",
  //           result: "sim"
  //         },
  //         {
  //           param: "-42",
  //           result: "não"
  //         },
  //         {
  //           param: "Olho",
  //           result: "sim"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex06.js",
  //       tests: [
  //         {
  //           param: 0,
  //           result: true
  //         },
  //         {
  //           param: "aaa",
  //           result: false
  //         },
  //         {
  //           param: -42,
  //           result: false
  //         },
  //         {
  //           param: 2156,
  //           result: true
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex07.js",
  //       tests: [
  //         {
  //           param: new Date(2013, 2, 1, 1, 10),
  //           result: "ficou no passado"
  //         },
  //         {
  //           param: new Date(2033, 2, 1, 1, 10),
  //           result: "estamos no futuro"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex08.js",
  //       tests: [
  //         {
  //           param: 0,
  //           result: "intervalo 1"
  //         },
  //         {
  //           param: 5,
  //           result: "intervalo 2"
  //         },
  //         {
  //           param: 10,
  //           result: "intervalo 2"
  //         },
  //         {
  //           param: 11,
  //           result: "intervalo 3"
  //         },
  //         {
  //           param: 100.000000000001,
  //           result: "intervalo 4"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa04/ex09.js",
  //       tests: [
  //         {
  //           param: "a",
  //           result: "alfa"
  //         },
  //         {
  //           param: "e",
  //           result: "echo"
  //         },
  //         {
  //           param: "i",
  //           result: "india"
  //         },
  //         {
  //           param: "o",
  //           result: "oscar"
  //         },
  //         {
  //           param: "u",
  //           result: "uniform"
  //         },
  //         {
  //           param: "carri",
  //           result: "Argumento inválido"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   etapa05: [
  //     {
  //       file: "etapa05/ex00.js",
  //       tests: [
  //         {
  //           result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex01.js",
  //       tests: [
  //         {
  //           param: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //           result: 10
  //         },
  //         {
  //           param: [[1]],
  //           result: 1
  //         },
  //         {
  //           param: "carro",
  //           result: null,
  //           output: "isso não é uma array"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex02.js",
  //       tests: [
  //         {
  //           param: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //           result: 1
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex03.js",
  //       tests: [
  //         {
  //           param: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //           result: 9
  //         },
  //         {
  //           param: [[1, 2]],
  //           result: 1
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex04.js",
  //       tests: [
  //         {
  //           param: [[1, 2]],
  //           result: [1, 2, "último"]
  //         },
  //         {
  //           param: [[]],
  //           result: ["último"]
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex05.js",
  //       tests: [
  //         {
  //           param: [[1, 2, 430], 2],
  //           result: [1, 2]
  //         },
  //         {
  //           param: [["aaa", 1, 23, 889], 0],
  //           result: [1, 23, 889]
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex06.js",
  //       tests: [
  //         {
  //           param: [[1, 2, 430], [2]],
  //           result: [1, 2, 430, 2]
  //         },
  //         {
  //           param: [[], [0]],
  //           result: [0]
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex07.js",
  //       tests: [
  //         {
  //           param: [["a", "b", "c"]],
  //           output: "a\nb\nc"
  //         },
  //         {
  //           param: [["Marvin", "Zaphod", "42"]],
  //           output: "Marvin\nZaphod\n42"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa05/ex08.js",
  //       tests: [
  //         {
  //           param: [["a", "b", "c"]],
  //           result: ["a", "b"]
  //         },
  //         {
  //           param: [["Marvin", 42, 999, "Zaphod", "42", 8]],
  //           result: ["Marvin", 42, 999]
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   etapa06: [
  //     {
  //       file: "etapa06/ex00.js",
  //       tests: [
  //         {
  //           param: [1, 5],
  //           result: [1, 2, 3, 4, 5]
  //         },
  //         {
  //           param: [-10, 2],
  //           result: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2]
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa06/ex01.js",
  //       tests: [
  //         {
  //           param: [1, 5],
  //           output: "2\n4",
  //           result: true
  //         },
  //         {
  //           param: [-10, 2],
  //           output: "-10\n-8\n-6\n-4\n-2\n0\n2",
  //           result: true
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa06/ex02.js",
  //       tests: [
  //         {
  //           param: [[5, 1, 0, 0, 0]],
  //           result: 5
  //         },
  //         {
  //           param: [[-10, 2]],
  //           result: 2
  //         },
  //         {
  //           param: [[2, 2]],
  //           result: 2
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa06/ex03.js",
  //       tests: [
  //         {
  //           param: "Cavalo",
  //           output:
  //             "é um C\nnão é um C\nnão é um C\nnão é um C\nnão é um C\nnão é um C"
  //         },
  //         {
  //           param: "lorem ",
  //           output:
  //             "não é um C\nnão é um C\nnão é um C\nnão é um C\nnão é um C\nnão é um C"
  //         },
  //         {
  //           param: "colchão",
  //           output:
  //             "é um C\nnão é um C\nnão é um C\né um C\nnão é um C\nnão é um C\nnão é um C"
  //         }
  //       ]
  //     },
  //     {
  //       file: "etapa06/ex04.js",
  //       tests: [
  //         {
  //           param: [["arca", 1, "marvin", ["s"], ""]],
  //           result: 3
  //         },
  //         {
  //           param: [[]],
  //           result: 0
  //         }
  //       ]
  //     }
  //   ]
  // }
// ];

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function runTest(ex) {
  const etapa = exercicios[ex]
  etapa.map((e, i) => {
    e.tests.map(t => {
      if (!t.output) t.output = "";
      let test = check(e.file, t.param);
      console.log(test);
      if (test === "error on file") {
        console.log("Erro no arquivo");
      } else if (typeof test !== "object") {
        console.log(test);
      } else {
        if (
          (test.output.toString() == t.output && test.result === t.result) ||
          (test.result &&
            t.result &&
            arraysEqual(test.result, t.result) &&
            test.output.toString() == t.output)
        ) {
          console.log("certo ex: " + i);
        } else if (
          t.result &&
          t.result.test &&
          test.output.toString() === t.output &&
          t.result.test(test.result)
        ) {
          console.log("certo ex: " + i);
        } else {
          console.log(Array.isArray(t.result), Array.isArray(test.result));
          console.log("errou ex: " + i);
          console.log(
            "testando parametro(s) " +
              t.param +
              "\nO resultado esperado era " +
              t.result +
              " e o obtido foi " +
              test.result +
              "\nO console.log esperado era " +
              t.output +
              " e o obtido foi " +
              test.output
          );
        }
      }
    });
  });
}

runTest(process.argv[2]);
