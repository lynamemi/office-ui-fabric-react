import { styled } from '../../../Utilities';
import {
  IShimmerElementsGroupProps,
  IShimmerElementsGroupStyleProps,
  IShimmerElementsGroupStyles
} from './ShimmerElementsGroup.types';
import { ShimmerElementsGroupBase } from './ShimmerElementsGroup.base';
import { getStyles } from './ShimmerElementsGroup.styles';

export const ShimmerElementsGroup = styled<
  IShimmerElementsGroupProps,
  IShimmerElementsGroupStyleProps,
  IShimmerElementsGroupStyles
>(ShimmerElementsGroupBase, getStyles);
