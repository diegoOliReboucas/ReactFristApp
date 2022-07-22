import React from 'react';
import styles from './Money.module.css';
import './Flags.css';
import { useEffect } from 'react';
import Head from './Head';

const Money = (props) => {
  const [valor, setValor] = React.useState(0);
  const [conversao, setConversao] = React.useState('Real');
  const [convertido, setConvertido] = React.useState('Real');
  const [nomeConversao, setNomeConversao] = React.useState('Real');
  const [nomeConvertido, setNomeConvertido] = React.useState('Real');
  const [codigo, setCodigo] = React.useState('BRL');
  const [codigo2, setCodigo2] = React.useState('BRL');
  const [valorConvertido, setValorConvertido] = React.useState(0);
  const [numeroLimpo, setNumeroLimpo] = React.useState('');

  function handleClick(e) {
    setNomeConvertido(convertido);

    fetch(`https://economia.awesomeapi.com.br/last/${codigo}-${codigo2}`)
      .then((r) => r.json())
      .then((body) => {
        console.log(body);
        setValorConvertido(valor * body[codigo + codigo2].bid);
      });
  }

  useEffect(() => {
    switch (conversao) {
      case 'Real':
        setCodigo('BRL');
        break;
      case 'Dolar':
        setCodigo('USD');
        break;
      case 'Euro':
        setCodigo('EUR');
        break;
      case 'Libra':
        setCodigo('GBP');
        break;
      case 'Bitcoin':
        setCodigo('BTC');
        break;
    }

    setNomeConversao(conversao);
  }, [conversao]);

  useEffect(() => {
    switch (convertido) {
      case 'Real':
        setCodigo2('BRL');
        break;
      case 'Dolar':
        setCodigo2('USD');
        break;
      case 'Euro':
        setCodigo2('EUR');
        break;
      case 'Libra':
        setCodigo2('GBP');
        break;
    }

    setNomeConvertido(convertido);
  }, [convertido]);

  if (valor.length < 1) {
    setValor('Valor');
  }

  return (
    <div className={styles.body}>
      <Head title="Conversor de Moedas" />
      <h1 style={{ marginBottom: '2rem' }}>{props.titulo}</h1>
      <div className={styles.main}>
        <h2>Conversor de Moedas</h2>
        <div className={styles.conteudo}>
          <div className={styles.conversao}>
            <div className={styles.converterDe}>
              <label htmlFor="converterDe">Converter de:</label>
              <select
                onChange={(e) => setConversao(e.target.value)}
                id="converterDe"
              >
                <option id="BRL" value="Real">
                  Real Brasileiro
                </option>
                <option id="USD" value="Dolar">
                  Dolar Americano
                </option>
                <option id="GBP" value="Libra">
                  Libra Esterlina
                </option>
                <option id="EUR" value="Euro">
                  Euro
                </option>
                <option id="BTC" value="Bitcoin">
                  Bitcoin
                </option>
              </select>
            </div>
            <div className={styles.converterPara}>
              <label htmlFor="converterPara">Converter para:</label>
              <select
                onChange={(e) => setConvertido(e.target.value)}
                id="converterPara"
              >
                <option value="Real">Real Brasileiro</option>
                <option value="Dolar">Dolar Americano</option>
                <option value="Libra">Libra Esterlina</option>
                <option value="Euro">Euro</option>
              </select>
            </div>
            <div className={styles.valor}>
              <label htmlFor="valor">Valor:</label>
              <input
                onChange={(e) => setValor(e.target.value)}
                id="valor"
                type="number"
              />
            </div>
            <button onClick={handleClick}>Converter</button>
          </div>

          <div className={styles.convertido}>
            <div className={styles.convertidoConteudo}>
              <div className={styles.resultado1}>
                <div className={`${conversao}`}></div>
                <p>{nomeConversao}</p>
                <h4>{valor}</h4>
              </div>
              <div className={styles.seta}>⇩</div>
              <div className={styles.resultado2}>
                <div className={`${convertido}`}></div>
                <p>{nomeConvertido}</p>
                <h4>{valorConvertido.toFixed(2).replace('.', ',')}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;
