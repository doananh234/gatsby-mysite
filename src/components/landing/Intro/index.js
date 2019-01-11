import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withI18n } from 'react-i18next';
import { SmallerContainer, ThemeContext } from '../../common';
import { MagicalButton, Wrapper, Flex } from './styles';

const IntroUI = ({ t }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Wrapper themeType={theme} as={SmallerContainer}>
          <h1>{t('intro.title')}</h1>
          <p>{t('intro.description')}</p>
          <Flex>
            <MagicalButton href={t('intro.link.cv')} rel="noopener noreferrer" target="_blank">
              {t('intro.button.viewResume')}
            </MagicalButton>
            <MagicalButton as={Link} to="/contact">
              {t('intro.button.getInTouch')}
            </MagicalButton>
          </Flex>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

IntroUI.propTypes = {
  t: PropTypes.func,
};

export const Intro = withI18n()(IntroUI);
