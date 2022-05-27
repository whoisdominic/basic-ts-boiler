import chalk from "chalk";

export function main() {
  console.log(chalk.blue("Hello boiler 😉"));
  console.log(
    chalk.magenta(
      "This is a basic TS node boilderplate\nI'll be using this in a lot of my projects!"
    )
  );

  return 0;
}
main();
