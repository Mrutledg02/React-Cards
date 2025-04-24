function formatPokemon(data) {
    return {
      front: data.sprites.front_default,
      back: data.sprites.back_default,
      name: data.name,
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      }))
    };
  }
  
  export default formatPokemon;