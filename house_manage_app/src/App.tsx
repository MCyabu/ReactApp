import React from 'react';
import { useTable,Column}  from 'react-table';
import './App.scss';

//react-tableをimport
//TODO
//型定義をする
  interface Data {
    date: string;
    personName: string;
    bookName: string;
    status: string; //未読、読み途中、読了
  }

  // const data: Data[] = React.useMemo(
  //   () => [
  //     {
  //       col1: 'Hello',
  //       col2: 'World',
  //     },
  //     {
  //       col1: 'react-table',
  //       col2: 'rocks',
  //     },
  //     {
  //       col1: 'whatever',
  //       col2: 'you want',
  //     },
  //   ],
  //   []
  // )

  const columns: Column<Data>[] = [
    {
      Header: '日付',
      accessor: 'date'
    },
    {
      Header: '読者の名前',
      accessor: 'personName'
    },
    {
      Header: '書籍の名前',
      accessor: 'bookName'
    },
    {
      Header: '読書経過',
      accessor: 'status'
    }
  ];
  
  const data: Data[] = [
    {
      date: '2021/08/10',
      personName: "John",
      bookName: "Apple",
      status: "未読"
    }
  ];

  // const columns: Column<Data>[]= React.useMemo(
  //   () => [
  //     {
  //       Header: 'Column 1',
  //       accessor: 'col1', // accessor is the "key" in the data
  //     },
  //     {
  //       Header: 'Column 2',
  //       accessor: 'col2',
  //     },
  //   ],
  //   []
  // )

  function App() {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable<Data>({ columns, data });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
