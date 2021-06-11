import LoginForm from './LoginForm';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { StyledLoginLogo, StyledSelectRegion, SplitLine } from './index.styles';
import { Avatar, Grid, IconButton } from '@material-ui/core';
import BattleNetTittle from '../pictures/icons8-battle.net.svg';
import SettingsIcon from '@material-ui/icons/Settings';
import artiWord from '../pictures/logo-horizontal-color-light.svg';

const App = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid container xs={4} justify="center">
        <StyledLoginLogo>
          <img src={BattleNetTittle}></img>
        </StyledLoginLogo>
      </Grid>
      <Grid container xs={4} justify="center">
        <StyledLoginLogo>
          <img src={artiWord}></img>
        </StyledLoginLogo>
      </Grid>
      <Grid container xs={4} justify="flex-end">
        <StyledSelectRegion>
          <SettingsIcon />
        </StyledSelectRegion>
      </Grid>
      <Grid container xs={4}>
        <LoginForm />
      </Grid>
      <Grid container xs={4}>
        <SplitLine>
          <span>或使用以下账号登录</span>
        </SplitLine>
      </Grid>
      <Grid container xs={4}>
        other login
      </Grid>
      <Grid container xs={4}>
        免费创建战网通行证
      </Grid>
      <Grid container xs={4}>
        无法登录？
      </Grid>
      <Grid container xs={4}>
        安全令重新同步
      </Grid>
    </Grid>
  );
};

export default App;
