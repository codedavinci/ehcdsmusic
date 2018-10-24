export const safeGet = (args, ret) =>
  args.reduce((acc, val) => (acc && acc[val] ? acc[val] : null), ret)

export const randomColor = () => {
  let letters = '0123456789ABCDEF'
  let hex = '#'
  for (var i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)]
  }

  return hex
}

export const delayRequest = ms => new Promise(r => setTimeout(r, ms))
