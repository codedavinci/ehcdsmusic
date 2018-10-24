export const safeGet = (args, ret) =>
  args.reduce((acc, val) => (acc && acc[val] ? acc[val] : null), ret)

export const RandomColor = () => {
  let letters = '0123456789ABCDEF'
  let hex = '#'
  for (var i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)]
  }

  return hex
}
