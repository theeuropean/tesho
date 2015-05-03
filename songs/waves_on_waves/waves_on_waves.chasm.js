const { tempo, chordMap, part, phrase, gr, section, strain, action } =
  require('chasm').piece('waves_on_waves')

tempo(125)

chordMap(
  [[60, 64, 67], [60, 64, 69], [60, 65, 69], [59, 62, 67]],
  [[60, 64, 67], [59, 64, 67], [58, 64, 67], [57, 61, 64], [62, 65, 69], [61, 65, 69], [60, 65, 69], [59, 62, 67]],
  [[60, 64, 67], [59, 64, 67], [58, 64, 67], [57, 60, 65], [56, 60, 65], [55, 60, 65]]
)
 
part('drums',
  phrase(
    gr('x---x---x---x---', 'kick'),
    phrase(
      gr('----x-------x---', 'snare'),
      phrase(
        gr('xxxxxxxxxxxxxxxx', 'hhc')))))

part('bass',
  gr('--xx-x--xx-x--xx', 4),
  gr('xx--x-xx--x-xx--', 0))

section('intro',
  part('drums',
    strain('kicks')))

section('verse',
  part('drums',
    strain('kicks')))

action('chbtn/*', 'verse/play')
action('fnbtn/0', 'drums/0/play')
action('fnbtn/1', 'drums/1/play')
action('fnbtn/2', 'drums/2/play')