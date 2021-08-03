import { connect } from 'react-redux';
import { RootReducerState } from '../../../domain/common';
import SeedRevealView, { SeedRevealProps } from '../../../presentation/onboarding/seed-reveal';

const mapStateToProps = (state: RootReducerState): SeedRevealProps => ({
  onboardingMnemonic: state.onboarding.mnemonic,
});

const SeedReveal = connect(mapStateToProps)(SeedRevealView);

export default SeedReveal;