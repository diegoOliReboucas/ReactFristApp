import React from 'react';
import Input from './Input';
import styles from './Pokemon.module.css';
import './fundos.css';
import Head from './Head';

const Pokemon = (props) => {
  const [poke, setPoke] = React.useState('');
  const [nome, setNome] = React.useState('pikachu');
  const [id, setId] = React.useState('25');
  const [imgpoke, setImgpoke] = React.useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  );
  const [hp, setHp] = React.useState('35');
  const [type, setType] = React.useState('electric');
  const [height, setHeight] = React.useState('4');
  const [weight, setWeight] = React.useState('60');
  const [hability, setHability] = React.useState('static');
  const [error, setError] = React.useState('');

  function handleClick(e) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then((r) => r.json())
      .then((body) => {
        console.log(body);
        setNome(body.forms[0].name);
        setId(body.id);
        setHp(body.stats[0]['base_stat']);
        setHeight(body.height);
        setWeight(body.weight);
        setType(body.types[0].type.name);
        setHability(body.abilities[0].ability.name);
        setImgpoke(body.sprites.other['official-artwork']['front_default']);

        setError('');
      })
      .catch(function () {
        setError('Pokemon nao encontrado');
        console.log(error);
      });
    e.preventDefault();
  }

  return (
    <div className={styles.body}>
      <Head title="Pokedex" />
      <h1 style={{ marginBottom: '2rem' }}>{props.titulo}</h1>
      <form onSubmit={handleClick}>
        <Input
          placeholder="Digite o nome do pokemon"
          button="Buscar"
          onClick={handleClick}
          onChange={(e) => setPoke(e.target.value)}
        />
      </form>
      {error ? <p>Pokemon nao indentificado</p> : ''}

      <div className={styles.main + ' ' + `${type}`}>
        <div className={styles.header}>
          <h3>{nome + ' #' + id}</h3>
          <span>hp {hp}</span>
        </div>
        <img src={imgpoke} alt="33" />
        <div className={styles.informacoes}>
          <h3>Informações</h3>
          <p>
            O pokemon {nome} é do tipo {type}, sua altura é: {height / 10} m e
            seu peso é: {weight / 10} kg, e sua principal habilidade é:{' '}
            {hability}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
