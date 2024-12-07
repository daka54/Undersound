import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const QuestionaryStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent:'center',
        backgroundColor: MyColors.brownie,
        paddingVertical: 80
    },
    firstText: {
        color: MyColors.dun,
        fontSize: 25
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 20 
      },
      genreButton: {
        backgroundColor: MyColors.secondary,
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
      },
      genreButtonSelected: {
        backgroundColor: MyColors.pink,
      },
      genreText: {
        color: '#2b1919',
        fontWeight: 'bold',
      },
      genreTextSelected: {
        color: '#fff',
      },
      counter: {
        color: MyColors.secondary,
        marginTop: 20,
        marginBottom: 10,
      },
      continueButton: {
        backgroundColor: MyColors.primary,
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 60,
      },
      continueButtonDisabled: {
        backgroundColor: MyColors.disable,
      },
      continueButtonText: {
        color: MyColors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default QuestionaryStyles;