// @flow
import React, { useEffect } from 'react';
import { shape, string } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import './Domain.scss';
import Layout from '../../containers/Layout/Layout';
import { domainAction } from '../../store/ducks/example';

const Domain = ({
  domainState: {
    data: { title },
  },
}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(domainAction());
  }, []);

  return (
    <main className="domain">
      <Layout>
        <>
          <h2>Layout por dominio: {title}</h2>
        </>
      </Layout>
    </main>
  );
};
Domain.propTypes = {
  domainState: shape({
    data: shape({
      title: string,
    }),
  }),
};

export default connect(({ domainState }) => ({ domainState }), { domainAction })(Domain);
