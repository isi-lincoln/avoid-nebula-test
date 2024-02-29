topo = {
  name: 'nebula-overlay',
  nodes: [ubuntu('phone'), ubuntu('home'), ubuntu('work'), ubuntu('games'), ubuntu('server'),ubuntu('x')],
  switches: [cumulus('s')],
  links: [
    Link('phone', 1, 's', 1),
    Link('home', 1, 's', 2),
    Link('work', 1, 's', 3),
    Link('x', 1, 's', 4),
    Link('games', 1, 'home', 2),
    Link('server', 1, 'work', 2),
  ]
}

function ubuntu(name) {
  return {
    name: name,
    image: 'ubuntu-2204',
    memory: { capacity: GB(2) },
    proc: { cores: 2 }
  }
}

function cumulus(name) {
  return {
    name: name,
    image: 'cumulusvx-4.1',
    memory: { capacity: GB(2) },
    proc: { cores: 2 }
  }
}
