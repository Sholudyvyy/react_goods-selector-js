import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(item => {
            return (
              <tr
                key="item"
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGood === item,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === item ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info': selectedGood === item,
                    })}
                    onClick={() =>
                      selectedGood === item
                        ? setSelectedGood('')
                        : setSelectedGood(item)
                    }
                  >
                    {selectedGood === item ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
